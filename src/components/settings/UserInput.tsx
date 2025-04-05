import React from "react";

interface UserInputProps {
  icon?: React.ReactNode;
  title?: string;
  placeholder?: React.ReactNode;
  type?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({
  icon,
  title,
  placeholder,
  type = "text",
  readOnly = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-[#7C7C8D] font-[500] mb-2">{title}</label>
      <div className="flex items-center border border-[#E7ECF3] active:border- rounded-[10px] p-2">
        {icon}
        <div className="w-full">
          {typeof placeholder === "string" ? (
            <input
              value={value}
              onChange={(e) => onChange && onChange(e.target.value)}
              type={type}
              placeholder={placeholder}
              readOnly={readOnly}
              className="w-full p-2 outline-none text-[#5F6165]"
            />
          ) : (
            placeholder
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInput;
