// "use client";
// // import { useSession } from "next-auth/react";
// interface LogoutPropsTypes {
//   onClick: () => void;
// }

// const LogoutBtn = ({ onClick }: LogoutPropsTypes) => {
//   // const { data: session } = useSession();

//   return (
//     <button
//       onClick={onClick}
//       className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
//     >
//       Confirm
//     </button>
//     // <div className="grid place-items-center h-screen">
//     //   <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
//     //     <div>
//     //       ID: <span className="font-bold">{session?.user?.id}</span>
//     //     </div>
//     //     <div>
//     //       Email: <span className="font-bold">{session?.user?.email}</span>
//     //     </div>
//     //     <button
//     //       onClick={() => signOut()}
//     //       className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
//     //     >
//     //       Log Out
//     //     </button>
//     //   </div>
//     // </div>
//   );
// };

// export default LogoutBtn;
