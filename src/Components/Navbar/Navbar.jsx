import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <div className="relative z-[999] text-black dark:text-white duration-300">
        <div className="container py-2 md:py-0 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img className="h-16" src={logo} alt="" />
              <p className="text-3xl">
                VR <span className="font-bold">WORLD</span>
              </p>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map(({ id, name, link }) => {
                  return (
                    <li className="py-4" key={id}>
                      <a
                        href={link}
                        className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                {/* Darkmode features */}
                <DarkMode />
              </ul>
            </nav>
            {/*Mobile view sidebar*/}
            <div className="block md:hidden">
              <div className="flex items-center gap-3">
                <DarkMode />
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
