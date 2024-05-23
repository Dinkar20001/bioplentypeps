import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuUnfold3Line2 } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        {/* top heading section */}

        <div className="top-banner p-2">
          <p className="text-center text-md">
            Welcome to <strong>Bioplentypeps</strong>
          </p>
        </div>

        {/* Navbar Design with function */}

        <nav className="bg-white shadow-lg border">
          <div className="flex items-center font-medium justify-around md:flex-col lg:flex-row">
            
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <img
                src="https://github.com/Dinkar20001/for-image/assets/169672358/d72d854a-4dd8-45c8-a4c5-8d84cf29027d"
                alt="logo"
                className="md:cursor-pointer h-9"
              />
              <div
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? <RiMenuUnfold3Line2 /> : <MdMenuOpen />}
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-1 font-[Poppins]">
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  About
                </Link>
              </li>

              {/* multiple dropdown */}
              <NavLinks />
              {/* multiple dropdown */}

              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle className="for-logo-cart" />
                    <p>Sign in</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  <div className=" flex items-center justify-center gap-2">
                    <FaCartArrowDown className="for-logo-cart" />
                    <p>My Cart</p>
                  </div>
                </Link>
              </li>
            </ul>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full gap-1 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="px-3 inline-block">
                  About
                </Link>
              </li>
              {/* products */}
              <NavLinks />

              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle className="for-logo-cart" />
                    <p>Sign in</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="py-3 px-3 inline-block">
                  <div className=" flex items-center justify-center gap-2">
                    <FaCartArrowDown className="for-logo-cart" />
                    <p>My Cart</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
