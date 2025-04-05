"use client";

import { useEffect, useState } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage for theme
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full"
    >
      {theme === "light" ? (
        <FaCloudMoon className="text-xl" />
      ) : (
        <MdSunny className="text-yellow-300 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;




// "use client";

// import { useEffect, useState } from "react";
// import { FaCloudMoon } from "react-icons/fa";
// import { MdSunny } from "react-icons/md";

// const getInitialTheme = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("theme") || "light";
//   }
//   return "light"; // Fallback for SSR
// };

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]); // Runs whenever `theme` changes

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full"
//     >
//       {theme === "light" ? (
//         <FaCloudMoon className="text-xl" />
//       ) : (
//         <MdSunny className="text-yellow-300 text-xl" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;
