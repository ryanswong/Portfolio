import { useState } from "preact/hooks";
import "../styles/hamburger.css"

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked. isOpen is now: " + isOpen);
  };

  // border-2 border-black dark:border-white rounded

  return (
    <button onClick={handleClick}>
      <svg class="hamburger" viewBox="0 0 100 100" height={30} width={30}>
        <rect class={`top line ${isOpen ? "open" : ""}`} width="80" height="10" rx="5" x="10" y="25"></rect>
        <rect class={`middle line ${isOpen ? "open": ""}`} width="80" height="10" rx="5" x="10" y="45"></rect>
        <rect class={`bottom line ${isOpen ? "open" : ""}`} width="80" height="10" rx="5" x="10" y="65 "></rect>

      </svg>
    </button>
  );
};