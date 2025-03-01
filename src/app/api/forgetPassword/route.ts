import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";
import moment from "moment";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const userEmail = body.email;
    console.log(userEmail);

    const compareEmail = await prisma.users.findUnique({
      where: { email: userEmail },
    });

    if (!compareEmail) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "User not found in the database",
      });
    }

    const resetToken = crypto.randomBytes(10).toString("hex");
    const resetTokenExpiration = moment().add(1, "hour").toDate();
    await prisma.users.update({
      where: { email: userEmail },
      data: {
        reset_token: resetToken,
        reset_token_expiration: resetTokenExpiration,
      },
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/auth/newPassword/?token=${resetToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Reset Password",
      html: `Please click <a href=${resetLink}>here</a> to reset your password`,
    };

    console.log("mailOptions----------", mailOptions);

    const sendMail = transporter.sendMail(mailOptions);
    if (!sendMail) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "something wrong in sending email",
      });
    }

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Request successful",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 400,
      message: error.message,
    });
  }
};

// =================================================================

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const newPassword = body.password;
    const resetToken = body.token;

    console.log("newPassword----------------", newPassword);
    console.log("reset_token----------------", resetToken);

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const user = await prisma.users.findUnique({
      where: { reset_token: resetToken },
    });
    console.log("user----------", user);
    
    if (
      !user ||
      !user.reset_token_expiration ||
      user.reset_token_expiration < new Date()
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const isOldPassword = await bcrypt.compare(newPassword, user.password);
    if (isOldPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "New password cannot be the same as the old one",
        },
        { status: 400 }
      );
    }

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        reset_token: null,
        reset_token_expiration: null,
      },
    });

    return NextResponse.json(
      { success: true, message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
};
