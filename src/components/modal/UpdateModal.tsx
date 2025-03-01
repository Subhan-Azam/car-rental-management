// "use client";
// import useUserDetails from "@/hooks/useUserDetails";
// // import { useState } from "react";
// import UserInput from "../settings/UserInput";
// import { FiHome } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
// import { LiaBirthdayCakeSolid } from "react-icons/lia";
// import { IoIosMale } from "react-icons/io";
// import useModel from "@/hooks/useModel";

// const UpdateModal = () => {
//   const { isOpen, handleIsOpen, handleOverlayClick } = useModel();
//   const { userDetails } = useUserDetails();

//   const userInputArray = [
//     {
//       icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
//       title: "Live in",
//       type: "text",
//       placeholder: userDetails?.city ? userDetails?.city : "City Address",
//       readOnly: false,
//     },
//     {
//       icon: <FiHome className="w-6 h-6 text-[#7C7C8D]" />,
//       title: "Street Address",
//       type: "text",
//       placeholder: userDetails?.street ? userDetails?.street : "Street Address",
//       readOnly: false,
//     },
//     {
//       icon: <HiOutlineMail className="w-6 h-6 text-[#7C7C8D]" />,
//       title: "Email Address",
//       type: "email",
//       placeholder: userDetails?.email ? userDetails?.email : "Enter your email",
//       readOnly: true,
//     },
//     {
//       icon: <LiaBirthdayCakeSolid className="w-6 h-6 text-[#7C7C8D]" />,
//       title: "Date Of Birth",
//       type: "date",
//       placeholder: userDetails?.dateOfBirth
//         ? userDetails?.dateOfBirth
//         : "Select Date of Birth",
//       readOnly: false,
//     },
//     {
//       icon: <IoIosMale className="w-6 h-6 text-[#7C7C8D]" />,
//       title: "Gender",
//       type: "text",
//       placeholder: userDetails?.gender ? userDetails?.gender : "Select Gender",
//       readOnly: false,
//     },
//   ];

//   return (
//     <>
//       <button
//         onClick={handleIsOpen}
//         className="font-medium text-[#A162F7] hover:text-purple-700"
//       >
//         Update
//       </button>
//       {isOpen && (
//         <div
//           id="modalRemove"
//           onClick={handleOverlayClick}
//           className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//         >
//           <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[350px] p-6 relative">
//             <button
//               onClick={handleIsOpen}
//               className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
//             >
//               &times;
//             </button>

//             <h2 className="text-lg font-semibold text-gray-800">
//               Update Your Details
//             </h2>
//             <form className="mt-4">
//               <div className="mb-3">
//                 {userInputArray?.map((item, index) => (
//                   <UserInput
//                     key={index}
//                     icon={item.icon}
//                     title={item.title}
//                     placeholder={item.placeholder}
//                     type={item.type}
//                     readOnly={item.readOnly}
//                   />
//                 ))}
//               </div>

//               <div className="mt-4 flex justify-end gap-3">
//                 <button
//                   onClick={handleIsOpen}
//                   className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UpdateModal;
