import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import './Navbar.css'

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      <section>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">

            <h1
              className="py-1 my-3 text-md font-bold flex justify-between items-center md:pr-0 pr-5 group text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            
            {link.submenu && (
              <div>
                <div className="absolute top-0 left-44 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 -left-2 absolute 
                    mt-6 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-2 grid grid-cols-3 rounded border border-grey-400 gap-2 for-controll-dropdown">

                    {link.sublinks.map((mysublinks) => (
                      <div>


                        <h1 className="text-md font-semibold sub-heading">
                          {mysublinks.Head}
                        </h1>

                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5 sub-para">
                            <Link
                              to={slink.link}
                              className="hover:text-orange-400 hover:scale-110 transition duration-500"
                            >
                              {slink.name}
                            </Link>
                          </li>

                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}


          </div>


          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex cursor-pointer justify-between items-center md:pr-0 pr-5 selection:bg-blue-gray-700"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link className="cursor-pointer hover:text-orange-600" to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </section>
    </>
  );
};

export default NavLinks;
