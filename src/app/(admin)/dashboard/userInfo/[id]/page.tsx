"use client";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function UserInfo() {
  const { user } = useUserInfo();
  console.log("single user detailuser", user);

  const router = useRouter();

  const formatValue = (value: unknown): string => {
    if (value instanceof Date) {
      return value.toISOString().split("T")[0];
    }
    return value !== null && value !== undefined ? String(value) : "null";
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <button className="mb-4 text-blue-600" onClick={() => router.back()}>
        &larr; Back to Users
      </button>

      <div className="flex items-center space-x-4">
        {user?.profilePhoto ? (
          <Image
            src={formatValue(user?.profilePhoto)}
            alt="User Avatar"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        ) : (
          <FaUserCircle className="text-[#7C7C8D] rounded-full w-24 h-24" />
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {formatValue(user?.firstName)} {formatValue(user?.lastName)}
          </h3>
          <p className="text-gray-600">{formatValue(user?.email)}</p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-medium text-gray-700 mb-2">
          Personal Information
        </h4>
        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="text-sm font-semibold text-gray-700">City:</p>
            <p className="text-gray-900">{formatValue(user?.city)}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Street:</p>
            <p className="text-gray-900">{formatValue(user?.street)}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Date Of Birth:
            </p>
            <p className="text-gray-900">{formatValue(user?.dateOfBirth)}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Gender:</p>
            <p className="text-gray-900">{formatValue(user?.gender)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
