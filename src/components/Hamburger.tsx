import { useState } from "preact/hooks";

// inspired by https://konradstaniszewski.com/blog/tailwind-hamburger
// FIXME make sure to make this my own thing. change it up. If I forget to change it up substantially, all credits to the link above.

export default function Hamburger (){
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked. isOpen is now: " + isOpen);
  };

  // border-2 border-black dark:border-white rounded

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
          }`}
      />
    </button>
  );
};