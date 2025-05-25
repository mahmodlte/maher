import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const OnMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-maher-primary shadow py-4 px-6">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1 className=" font-bold text-3xl font-heading text-maher-accent ">
            Maher | <span className=" font-arabic">ماهر</span>
          </h1>
        </Link>
        <button onClick={OnMenuClick} className=" md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-maher-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="space-x-6 hidden md:flex">
          <Link to="/workers" className="text-maher-accent">
            Workers
          </Link>
          <Link to="/contact" className="text-maher-accent">
            Contact
          </Link>
          <Link to="/jobs" className="text-maher-accent">
            Jobs
          </Link>
        </div>
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
        )}

        <div
          className={` text-maher-accent flex space-y-5 rounded-xs items-center fixed right-0 top-0 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } bg-maher-light h-full w-44 z-50 flex-col  p-4 md:hidden`}
        >
          <div className=" flex justify-between items-center p-4 w-full border-b-2 border-maher-primary ">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold"
            >
              X
            </button>
          </div>
          <Link to="/workers">Workers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/jobs">Jobs</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
