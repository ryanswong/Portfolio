// import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // <button class="w-20 h-6 rounded-full bg-gray-500" onClick={handleClick}>
    //   <div
    //     class="w-12 h-12 relative rounded-full transition duration-100 transform bg-yellow-500 -translate-x-2 p-1 text-white"
    //   >
    //   </div>
    // </button>

    // <label class="relative inline-flex items-center cursor-pointer">
    //   <input type="checkbox" value="" class="sr-only peer" onClick={handleClick} checked={theme === "dark"} />
    //   <div class="w-11 h-6 bg-gray-200 
    //     rounded-full 
    //     before:content-[''] 
    //     before:absolute 
    //     before:top-[2px] 
    //     before:left-[2px] 
    //     before:bg-white 
    //     before:border-gray-300 
    //     before:border 
    //     before:rounded-full 
    //     before:h-5 
    //     before:w-5 
    //     before:transition-all 
    //     peer-checked:before:translate-x-full 
    //     peer-checked:before:border-white 
    //     peer-checked:bg-gray-700">
    //   </div>
    //   {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
    // </label>

    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" onClick={handleClick} checked={theme === "dark"} />
      <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-gray-700"></div>
      <div class="absolute top-[2px] left-[2px] w-5 h-5 transition-all transform bg-white rounded-full peer-checked:translate-x-full "></div>
      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
    </label>

    // before:content-[''] 
    //       before:absolute 
    //       before:top-[2px] 
    //       before:left-[2px] 
    //       before:bg-white 
    //       before:border-gray-300 
    //       before:border 
    //       before:rounded-full 
    //       before:h-5 
    //       before:w-5 
    //       before:transition-all 
    //       peer-checked:before:translate-x-full 
    //       peer-checked:before:border-white 
    //       peer-checked:bg-gray-700

  );
}
