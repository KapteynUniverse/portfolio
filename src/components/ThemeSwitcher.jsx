import { useState, useEffect } from "react";
import SunLogo from "/assets/images/icons/sun.png";
import MoonLogo from "/assets/images/icons/moon.png";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="hover:animate-pulse rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <div className="relative w-8 h-8">
        <img
          src={SunLogo}
          alt={"Sun icon"}
          aria-hidden="true"
          width={32}
          height={32}
          className={`absolute top-0 left-0 transition-opacity duration-500 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={MoonLogo}
          alt={"Moon icon"}
          aria-hidden="true"
          width={32}
          height={32}
          className={`absolute top-0 left-0 transition-opacity duration-500 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
