import "../styles/hamburger.css"

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  // const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked. isOpen is now: " + isOpen);
  };

  return (
    <button onClick={handleClick}>
      <svg class="hamburger" viewBox="0 0 100 100" height={40} width={40}>
        <rect class={`top line fill-gray-600 dark:fill-gray-300 ${isOpen ? "open" : ""}`} width="80" height="10" rx="5" x="10" y="25"></rect>
        <rect class={`middle line fill-gray-600 dark:fill-gray-300 ${isOpen ? "open" : ""}`} width="80" height="10" rx="5" x="10" y="45"></rect>
        <rect class={`bottom line fill-gray-600 dark:fill-gray-300 ${isOpen ? "open" : ""}`} width="80" height="10" rx="5" x="10" y="65 "></rect>
      </svg>
    </button>
  );
};