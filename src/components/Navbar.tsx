// import React from "react";
// import { RiSearchLine } from "react-icons/ri";
// import { IoNotificationsOutline } from "react-icons/io5";
// import profileImg from "../../public/assets/current-user.png";
// import Image from "next/image";

// //
// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-between py-4 px-6 bg-green-500 shadow-md fixed w-[calc(100%-250px)] top-0 z-10">
//       <div className="bg-gray-100 flex items-center gap-x-4 rounded-md py-2 px-4">
//         <RiSearchLine className="text-gray-500 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search or type"
//           className="bg-gray-100 text-sm font-medium w-[250px] border-none focus:outline-none"
//         />
//       </div>
//       <div className="flex items-center gap-x-6">
//         <IoNotificationsOutline className="text-gray-600 h-6 w-6" />

//         <Image
//           src={profileImg}
//           alt="Profile Image"
//           className="w-10 h-10 rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import profileImg from "../../public/assets/current-user.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 sm:left-[250px] w-full sm:w-[calc(100%-250px)] bg-white py-4 px-6 -z-10 flex items-center justify-between">
        <div className="bg-gray-100 flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px]">
          <RiSearchLine className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search or type"
            className="bg-gray-100 text-sm font-medium w-full border-none focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-x-6">
          <IoNotificationsOutline className="text-gray-600 h-6 w-6 cursor-pointer" />

          <Image
            src={profileImg}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
