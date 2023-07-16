import Hamburger from "./Hamburger";
import ThemeToggle from "./ThemeToggle";

export default function Header() {

  const navs = [
    ["#", "Home"],
    ["#expertise", "Expertise"],
    ["#experience", "Experience"],
    ["#contact", "Contact"],
  ];


  return (
    <header class="fixed top-0 bg-white dark:bg-slate-600 z-10 w-full bg-gray-100">
      <nav class="relative container mx-auto p-3">
        <div class="flex items-center justify-end gap-8">
          {/* <!-- Logo --> */}
          <a href="#" class="mr-auto flex items-center space-x-2">
            {/* <!-- <img src="terminalIcon.svg" alt="Terminal Icon" class="dark:stroke-white"> --> */}

              {/* <!-- is class dark:fill-white working? --> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H4V8h16v10zm-8-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1zM6.79 9.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L8.2 16.3a.996.996 0 1 1-1.41-1.41L8.67 13l-1.88-1.88a.996.996 0 0 1 0-1.41z"
                ></path>
              </svg>
              <span class="text-xl leading-none">Ryan</span>
          </a>

          {/* <!-- Nav --> */}
          <div class="hidden md:flex space-x-6">
            {
              navs.map((nav) => (
                <a href={nav[0]} class="hover:text-gray-400">
                  {nav[1]}
                </a>
              ))
            }
          </div>

          {/* <!-- Dark Mode Toggle --> */}
          <ThemeToggle />

          <div class="md:hidden">
            <Hamburger />
          </div>
        </div>
      </nav>
    </header>

  );
}