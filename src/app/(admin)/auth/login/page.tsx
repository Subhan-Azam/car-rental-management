// "use client";
// import AuthBtn from "@/components/button/AuthBtn";
// import LoginWithSocialMedia from "@/components/button/LoginWithSocialMedia";
// import ForgetPassWithCheckBox from "@/components/forgetPassWithCheckBox/ForgetPassWithCheckBox";
// import OrSec from "@/components/orSec/OrSec";
// import PageChange from "@/components/PageChange/PageChange";
// import TextInput from "@/components/textInput/TextInput";
// import useLogin from "@/hooks/useLogin";
// import React from "react";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// const Login = async () => {
//   const session = await getServerSession(authOptions);
//   if (session) {
//     redirect("/dashboard");
//   }

//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     loginError,
//     loading,
//     handleSubmit,
//   } = useLogin();
//   const InputsArray = [
//     {
//       value: email,
//       onChange: setEmail,
//       type: "email",
//       title: "Email",
//       placeholder: "abcd@example.com",
//     },
//     {
//       value: password,
//       onChange: setPassword,
//       type: "password",
//       title: "Password",
//       placeholder: "******",
//     },
//   ];
//   return (
//     <div className="flex justify-center h-full py-7 mx-3">
//       <div>
//         <PageChange
//           title="Welcome Back!"
//           link="/auth/signUp"
//           signUp="SignUp"
//           para="Don't have an account!"
//         />

//         <div className="flex flex-wrap justify-center gap-4">
//           <LoginWithSocialMedia
//             title="Sign in with Google"
//             className="bg-white text-black"
//           />
//           <LoginWithSocialMedia
//             title="Sign in with Facebook"
//             className="bg-[#4776D0] text-white"
//           />
//         </div>

//         <OrSec />

//         <form onSubmit={handleSubmit}>
//           <div className="w-full max-w-[506px] h-auto p-8 bg-white shadow-lg border border-[#F4F5F6] rounded-[10px]">
//             <div className="space-y-[14px]">
//               {InputsArray?.map((textInput, index) => (
//                 <TextInput
//                   key={index}
//                   value={textInput.value}
//                   onChange={textInput.onChange}
//                   title={textInput?.title}
//                   placeholder={textInput?.placeholder}
//                   type={textInput?.type}
//                 />
//               ))}
//             </div>

//             {loginError && (
//               <p className="text-red-500 text-sm mt-5">{loginError}</p>
//             )}
//           </div>
//           <ForgetPassWithCheckBox />

//           <AuthBtn loading={loading} title="Log in" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import LoginComp from "@/components/loginComp/LoginComp";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <LoginComp />
    </div>
  );
};

export default Login;
