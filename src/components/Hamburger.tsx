import { useState } from "preact/hooks";
import "../styles/hamburger.css"

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked. isOpen is now: " + isOpen);
  };

  // border-2 border-black dark:border-white rounded

  const lineClass = "line origin-center trasition duration-300 ease-in-out"

  return (
    <button onClick={handleClick}>
      <svg class="hamburger border" viewBox="0 0 100 100" width={50}>
        <rect class={`${lineClass} top ${isOpen ? "open rotate-45" : ""}`} width="80" height="10" rx="5" x="10" y="25"></rect>
        <rect class={`${lineClass} middle ${isOpen ? "open opacity-0": ""}`} width="80" height="10" rx="5" x="10" y="45"></rect>
        <rect class={`${lineClass} bottom ${isOpen ? "open -rotate-45" : ""}`} width="80" height="10" rx="5" x="10" y="65 "></rect>

      </svg>
    </button>
  );
};