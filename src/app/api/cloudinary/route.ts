// import { v2 as cloudinary } from "cloudinary";
// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { image, userId } = body;

//     if (!image || !userId) {
//       return NextResponse.json(
//         { error: "Image and User ID are required" },
//         { status: 400 }
//       );
//     }

//     // **Step 1: Pehli wali image ka public_id get karo**
//     const existingUser = await prisma.user.findUnique({
//       where: { id: userId },
//       select: { profilePhoto: true },
//     });

//     if (existingUser?.profilePhoto) {
//       // **Step 2: Pehli wali image ka public_id extract karo aur delete karo**
//       const oldImageUrl = existingUser.profilePhoto;
//       const publicIdMatch = oldImageUrl.match(/\/v\d+\/(.+)\./);
//       const publicId = publicIdMatch ? publicIdMatch[1] : null;

//       if (publicId) {
//         await cloudinary.uploader.destroy(`user_profiles/${publicId}`);
//       }
//     }

//     // **Step 3: Cloudinary par nayi image upload karo**
//     const uploadResponse = await cloudinary.uploader.upload(image, {
//       folder: "user_profiles",
//       resource_type: "image",
//     });

//     const imageUrl = uploadResponse.secure_url;

//     // **Step 4: MongoDB me profile photo update karo**
//     const updatedUser = await prisma.user.update({
//       where: { id: userId },
//       data: { profilePhoto: imageUrl },
//     });

//     return NextResponse.json(
//       { url: imageUrl, user: updatedUser },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error Updating Profile Photo:", error);
//     return NextResponse.json(
//       { error: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, userId } = body;

    if (!image || !userId) {
      return NextResponse.json(
        { error: "Image and User ID are required" },
        { status: 400 }
      );
    }

    // Fetch existing user profile photo details
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { profilePhoto: true, publicId: true }, // Store publicId in DB for accurate deletion
    });

    // Delete old profile image if exists
    if (existingUser?.publicId) {
      await cloudinary.uploader.destroy(existingUser.publicId);
    }

    // Upload new image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "user_profiles",
      resource_type: "image",
    });

    // Update profile photo URL & public_id in MongoDB
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        profilePhoto: uploadResponse.secure_url,
        publicId: uploadResponse.public_id, // Save public_id for future deletions
      },
    });

    await prisma.$disconnect();

    return NextResponse.json(
      { url: uploadResponse.secure_url, user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Updating Profile Photo:", error);
    await prisma.$disconnect();
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
