import React, { useRef } from "react";
import { menuItems } from "../Data/menuItems";
import MenuItems from "../components/MenuItems";

import Calling from "./Calling";

function NavBar() {
  const mobileNav = useRef(null);
  const hideNav = () => {
    mobileNav.current.classList.remove("show");
    const menuClose = document.querySelector(".nav.mobile .close");
    menuClose.classList.remove("show");
  };

  return (
    <>
      <div className="nav desktop py-2">
        <nav className="nav px-2 flex items-center justify-center  flex-wrap md:gap-12">
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
      <div ref={mobileNav} className="nav mobile py-2">
        <div onClick={hideNav} className="close">
          X
        </div>
        <nav className="nav px-2">
          <ul className="menus flex flex-col">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
      <Calling />
    </>
  );
}

export default NavBar;
