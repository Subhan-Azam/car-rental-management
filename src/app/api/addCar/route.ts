// import { prisma } from "@/config/prisma";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   try {
//     const body = await req.json();
//     const { carName } = body;
//     console.log("body========", body);

//     const response = await prisma.addCar.create({
//         data: { carName }, // ✅ Corrected
//       });

//     console.log("response", response);

//     return NextResponse.json({
//       success: true,
//       message: "post working successfully",
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { userId, carName, model, mileage, engine, transmission, price, description } = body;

    console.log("Request Body:", body);

    const response = await prisma.addCar.create({
      data: { userId, carName, model, mileage, engine, transmission, price, description },
    });

    console.log("Database Response:", response);

    return NextResponse.json({
      success: true,
      message: "Car added successfully",
      data: response,
    });
  } catch (error: any) {
    console.error("Error:", error);

    return NextResponse.json({
      success: false,
      message: error.message || "Something went wrong",
      details: error.meta || error.stack,
    });
  }
};

