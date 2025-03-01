import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log("body========", body);

    const response = await prisma.users.create({
      data: {
        ...body,
      },
    });

    console.log("response", response);

    return NextResponse.json({
      success: true,
      message: "post working successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
};
