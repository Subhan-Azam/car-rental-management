import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

// Get user details
export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ session, authOptions });
    }

    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

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

    const { id, ...updatedData } = body;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...updatedData,
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
