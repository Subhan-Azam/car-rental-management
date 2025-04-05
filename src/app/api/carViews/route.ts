import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  try {
    const { id } = await req.json();
    console.log("body:>>", id);

    // Validate the ID format
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "ID not found",
      });
    }

    const updatedCar = await prisma.addCar.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    console.log("api res=====", updatedCar);

    return NextResponse.json({
      success: true,
      message: "Views Post Working",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

export const GET = async () => {
  try {
    const res = await prisma.addCar.findMany({
      orderBy: { views: "desc" },
      take: 3,
    });
    return NextResponse.json({
      suceess: true,
      message: "get api working",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      suceess: false,
      message: "wrong in get api",
      error: error,
    });
  }
};
