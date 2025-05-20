import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function Navbar() {
  const [toggleTheme, setToggleTheme] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (toggleTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <nav className="px-6 py-4 flex w-full">
      <button
        onClick={() => setToggleTheme((prev) => !prev)}
        id="toggleDark"
        aria-label="Toggle dark mode"
        className="ml-auto"
      >
        {toggleTheme ? (
          <IoSunnyOutline
            className="text-slate-900 dark:text-yellow-500 cursor-pointer"
            size={24}
          />
        ) : (
          <FaRegMoon
            className="text-slate-900 dark:text-blue-600 cursor-pointer"
            size={24}
          />
        )}
      </button>
    </nav>
  );
}
