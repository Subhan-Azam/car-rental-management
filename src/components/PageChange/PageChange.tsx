import Link from "next/link";
import React from "react";

interface PageChange {
  title: string;
  link: string;
  signUp: string;
  para?: string;
}
const PageChange: React.FC<PageChange> = ({ title, link, signUp, para }) => {
  return (
    <div className="mb-5">
      <h1 className="text-[30px] font-[700] mb-2 text-center md:text-start">
        {title}
      </h1>
      <p className="text-[18px] mb-6 text-[#777E90] text-center md:text-start">
        {para}{" "}
        <Link
          href={link}
          className="text-purple-600 font-[500] hover:underline"
        >
          {signUp}
        </Link>
      </p>
    </div>
  );
};

export default PageChange;
