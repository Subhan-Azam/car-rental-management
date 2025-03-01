import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

// Get detail
export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ session, authOptions });
    }
    
    const user = await prisma.users.findUnique({
      where: { email: session?.user?.email as string },
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
    console.error("Error while fetching user session data:", error);
    return NextResponse.json(
      {
        message: "Error while getting session data",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { id, ...updatedData } = body;
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const existingUser = await prisma.users.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updateUser = await prisma.users.update({
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
    console.error("Update Error:", error);
    return NextResponse.json(
      {
        message: "Error while updating",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
