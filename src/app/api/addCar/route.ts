// import { prisma } from "@/config/prisma";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/route";

// export const POST = async (req: Request) => {
//   try {
//     const {
//       carName,
//       model,
//       mileage,
//       engine,
//       transmission,
//       price,
//       description,
//     } = await req.json();

//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json({ session, authOptions });
//     }

//     // Validate enum values
//     const validEngines = ["PETROL", "DIESEL", "ELECTRIC", "HYBRID"];
//     const validTransmissions = ["MANUAL", "AUTOMATIC"];

//     if (!validEngines.includes(engine.toUpperCase())) {
//       return NextResponse.json({
//         success: false,
//         message: `Invalid engine type. Valid options: ${validEngines.join(
//           ", "
//         )}`,
//       });
//     }

//     if (!validTransmissions.includes(transmission.toUpperCase())) {
//       return NextResponse.json({
//         success: false,
//         message: `Invalid transmission type. Valid options: ${validTransmissions.join(
//           ", "
//         )}`,
//       });
//     }

//     const response = await prisma.addCar.create({
//       data: {
//         userID: session.user.id,
//         carName,
//         model,
//         mileage,
//         engine: engine.toUpperCase(), // Convert to uppercase for Prisma enum
//         transmission: transmission.toUpperCase(), // Convert to uppercase for Prisma enum
//         price,
//         description,
//       },
//     });

//     console.log("Database Response:", response);

//     return NextResponse.json({
//       success: true,
//       message: "Car added successfully",
//       data: response,
//     });
//   } catch (error: any) {
//     console.error("Error:", error);

//     return NextResponse.json({
//       success: false,
//       message: error.message || "Something went wrong",
//       details: error.meta || error.stack,
//     });
//   }
// };







import { prisma } from "@/config/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req: Request) => {
  try {
    const {
      carName,
      model,
      mileage,
      engine,
      transmission,
      price,
      description,
      image,
    } = await req.json();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ success: false, message: "Not Authenticated" });
    }

    // Validate engine & transmission
    const validEngines = ["PETROL", "DIESEL", "ELECTRIC", "HYBRID"];
    const validTransmissions = ["MANUAL", "AUTOMATIC"];

    if (!validEngines.includes(engine.toUpperCase())) {
      return NextResponse.json({
        success: false,
        message: `Invalid engine type. Valid options: ${validEngines.join(", ")}`,
      });
    }

    if (!validTransmissions.includes(transmission.toUpperCase())) {
      return NextResponse.json({
        success: false,
        message: `Invalid transmission type. Valid options: ${validTransmissions.join(", ")}`,
      });
    }

    // Upload image to Cloudinary (if provided)
    let imageUrl = null;
    let publicId = null;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: "car_images",
        resource_type: "image",
      });
      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
    }

    // Save car details & image URL to database
    const response = await prisma.addCar.create({
      data: {
        userID: session.user.id,
        carName,
        model,
        mileage,
        engine: engine.toUpperCase(),
        transmission: transmission.toUpperCase(),
        price,
        description,
        imageUrl, // Store the uploaded image URL
        imagePublicId: publicId, // Store publicId for future deletion
      },
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
