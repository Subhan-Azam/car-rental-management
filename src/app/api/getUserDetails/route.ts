import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get user details
export const GET = async () => {
  const session = await getServerSession(authOptions);
  try {
    console.log("session:>> userdetail api", session?.user);

    if (!session) {
      return NextResponse.json({ message: "session not found" });
    }

    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    console.log("user:>> api", user);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        message: "Successfully retrieved user info",
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("session => ", session);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "An error occurred",
      },
      { status: 500 }
    );
  }
};

// update user details
export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { id, profilePhoto, ...updatedData } = body;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // update image in cloudinary
    let imageUrl = existingUser.profilePhoto;
    let publicId = existingUser.profilePublicId;

    if (profilePhoto) {
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }

      const uploadResponse = await cloudinary.uploader.upload(profilePhoto, {
        folder: "car_images",
        resource_type: "image",
      });

      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
    }

    // update data in db
    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...updatedData,
        profilePhoto: imageUrl,
        profilePublicId: publicId,
      },
    });

    console.log("Updated user:>>", updateUser);
    return NextResponse.json(
      { message: "Successfully updated", user: updateUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "An error occurred",
      },
      { status: 500 }
    );
  }
};
