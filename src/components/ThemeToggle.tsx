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


  const iconStyle = "h-4 fill-gray-600 dark:fill-gray-200"

  return (
    <div class="flex items-center space-x-2">
      {/* <img src="src/icons/moon.svg" alt="light mode sun icon" class="h-5" id="icon" /> */}
      {/* <div className="h-5 fill-gray-600 dark:fill-gray-400"> */}

      <svg xmlns="http://www.w3.org/2000/svg" class={iconStyle} viewBox="0 0 24 24">
        <path
          d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8 10q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z" />
      </svg>

      {/* </div> */}
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" onClick={handleClick} checked={theme === "dark"} />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-gray-700"></div>
        <div class="absolute top-[2px] left-[2px] w-5 h-5 transition-all transform bg-white rounded-full peer-checked:translate-x-full"></div>
      </label>

      <svg xmlns="http://www.w3.org/2000/svg" class={iconStyle} viewBox="0 0 384 512">
        <path
          d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
      </svg>

    </div>
  );
}
