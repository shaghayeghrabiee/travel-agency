import React, { useState, useEffect } from "react";
import { NavLinks, NavButtons } from "../SolidData/DataList";
import {Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { List } from "../customComponent/List";
import { Button } from "../customComponent/Button";
import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  const navigate= useNavigate();
  const [navBarColor, setNavBarColor] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0">
      <Slide direction="left">
        <nav
          className={`w-full md:h-24 h-20 ${
            navBarColor ? "bg-white" : "bg-transparent"
          } lg:px-24 md:px-12 px-8 flex justify-between items-center`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div
              className="lg:flex hidden items-center gap-48"
              id="navbar-default"
            >
              <ul className="flex items-center justify-center gap-8">
                {NavLinks.map((link, index) => (
                  <List className="w-full text-base" key={index}>
                    <NavLink
                      to={link.url}
                      className="relative inline-block overflow-hidden pt-2 pl-2 hover:border-b-orange-600 border-2 border-transparent after:duration-200 after:ease-in"
                    >
                      {link.name}
                    </NavLink>
                  </List>
                ))}
              </ul>
              <ul className="flex items-center justify-center gap-36">
                {NavButtons.map((button, index) => (
                  <List className="w-full" key={index}>
                    <Link to={`/${button.name}`}>
                      <Button
                        className={`${
                          button.name === "Signup"
                            ? "border-2 border-gray-950 before:top-0"
                            : "before:bottom-0 border-b-2 border-transparent hover:border-gray-950"
                        } py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-color2 before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}
                      >
                        {button.name}
                      </Button>
                    </Link>
                  </List>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:hidden flex gap-4 items-center">
            <div
              className="hamburger text-gray-950 cursor-pointer"
              onClick={handleToggle}
            >
              <CirclesFour size={30} color="currentColor" weight="fill" />
            </div>
          </div>
        </nav>
      </Slide>
      {/* Mobile Nav  */}
      <nav
        className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`w-[70%] h-screen bg-white flex flex-col justify-between items-center relative ${
            open ? "right-0" : "-right-[120vw]"
          } transition-all duration-500 ease-out delay-300`}
        >
          <section className="w-full px-4 py-6 flex flex-col gap-16">
            <div className="w-full flex justify-between items-center">
              <div
                className="hamburger text-gray-950 cursor-pointer"
                onClick={handleToggle}
              >
                <ArrowCircleRight
                  size={25}
                  color="currentColor"
                  weight="fill"
                />
              </div>
            </div>
            <ul className="flex flex-col gap-3 pl-2">
              {NavLinks.map((navlink, index) => (
                <List className="w-full text-base" key={index}>
                  <NavLink
                    to={navlink.url}
                    onClick={handleToggle}
                    className={`relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-color2 before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 `}
                  >
                    {navlink.name}
                  </NavLink>
                </List>
              ))}
            </ul>
          </section>
          <ul className="w-full flex items-center justify-center pb-24 gap-4">
            {NavButtons.map((navbutton, index) => (
              <List className="w-auto" key={index}>
                <Button
                  onClick={() => navigate(navbutton.url)}
                  type="button"
                  className={`${
                    navbutton.name === "Signup"
                      ? "border-2 border-gray-950 before:top-0"
                      : "before:bottom-0 border-b-2 border-white hover:border-gray-950"
                  } py-1.5 px-5 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-color2 before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base`}
                >
                  {navbutton.name}
                </Button>
              </List>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
