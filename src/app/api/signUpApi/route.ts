import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../config/prisma";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    const userExist = await prisma.users.findUnique({ where: { email } });

    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User already Exist",
        },
        { status: 400 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
        city: null,
        street: null,
        dateOfBirth: null,
        gender: null,
        profilePhoto: null,
      },
    });

    return NextResponse.json(
      { success: true, message: "User created successfully", newUser: newUser },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: "something wrong it api",
        message: error.message,
      },
      { status: 500 }
    );
  }
};
