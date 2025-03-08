"use client";

import { useEffect, useState } from "react";

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
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;


// "use client";

// import { useState, useEffect } from "react";

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [darkMode]);

//   return (
//     <label htmlFor="theme" className="theme">
//       <span className="theme__toggle-wrap">
//         <input
//           id="theme"
//           className="theme__toggle"
//           type="checkbox"
//           role="switch"
//           name="theme"
//           value="dark"
//           onChange={() => setDarkMode(!darkMode)}
//         />
//         <span className="theme__fill"></span>
//         <span className="theme__icon">
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//           <span className="theme__icon-part"></span>
//         </span>
//       </span>
//     </label>
//   );
// };

// export default ThemeToggle;
