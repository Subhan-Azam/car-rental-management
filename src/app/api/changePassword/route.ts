import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const PUT = async (req: Request) => {
  try {
    const { id, oldPassword, newPassword } = await req.json();

    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    if (!user || !user.password) {
      return NextResponse.json({
        success: false,
        message: "User not found or password missing",
      });
    }

    const comparePassword = await bcrypt.compare(oldPassword, user.password);

    if (!comparePassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    // Prevent reusing old password
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return NextResponse.json(
        { success: false, message: "New password must be different" },
        { status: 400 }
      );
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);
    if (!newPassword) {
      return NextResponse.json({ success: false, error: "password not fond" });
    }

    const changePassword = await prisma.user.update({
      where: { id: id },
      data: { password: hashPassword },
    });
    console.log("changePassword==========", changePassword);

    if (!changePassword) {
      return NextResponse.json({
        success: false,
        message: "password not updated",
      });
    }

    return NextResponse.json({
      success: true,
      message: "post successfully working",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
};

// import { prisma } from "@/config/prisma";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export const PUT = async (req: Request) => {
//   try {
//     const { id, oldPassword, newPassword } = await req.json();

//     // Validate input
//     if (!id || !oldPassword || !newPassword) {
//       return NextResponse.json(
//         { success: false, message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Find user
//     const user = await prisma.user.findUnique({ where: { id } });

//     if (!user || !user.password) {
//       return NextResponse.json(
//         { success: false, message: "User not found or password missing" },
//         { status: 404 }
//       );
//     }

//     // Validate old password
//     const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

//     if (!isPasswordValid) {
//       return NextResponse.json(
//         { success: false, message: "Invalid old password" },
//         { status: 401 }
//       );
//     }

//     // Prevent reusing old password
//     const isSamePassword = await bcrypt.compare(newPassword, user.password);
//     if (isSamePassword) {
//       return NextResponse.json(
//         { success: false, message: "New password must be different" },
//         { status: 400 }
//       );
//     }

//     // Hash new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // Update password in DB
//     const updatedUser = await prisma.user.update({
//       where: { id },
//       data: { password: hashedPassword },
//     });

//     if (!updatedUser) {
//       return NextResponse.json(
//         { success: false, message: "Failed to update password" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Password updated successfully",
//     });
//   } catch (error) {
//     console.error("Error changing password:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// };
