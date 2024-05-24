import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
          <div className="flex justify-center lg:justify-end items-end p-4 lg:p-14">
            <img
              className="max-w-full h-auto"
              src="https://img.freepik.com/free-vector/science-teamwork-round-composition_1284-25025.jpg?w=1380&t=st=1716552892~exp=1716553492~hmac=c53837b3268396aa01b0bb6161acd6a21c720b5ebbd4836b8beb561e45894b35"
              alt="about img"
            />
          </div>

          <div className="w-full lg:w-3/6 flex justify-center items-center p-4 lg:p-0">
            <div>
              <h6 className="uppercase text-sm my-4 font-bold text-primary">
                About us
              </h6>
              <h1 className="capitalize text-3xl mb-3 font-extrabold">
                We Are Professional pharmacy & Medical Service
              </h1>
              <h3 className="font-bold">
                Habitasse metus ridiculus dolor sit amet interdum tempor posuere
                vulputate efficitur eleifend
              </h3>

              <p className="mt-4">
                Euismod conubia fermentum rhoncus felis eros. Letius posuere
                accumsan sodales ligula etiam libero nisl senectus euismod dolor
                mauris. Auctor nibh si quisque sapien nostra consectetuer.
              </p>

              <button
                type="button"
                className="mt-9 text-gray-900 bg-gradient-to-r from-orange-200 via-orange-200 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-gray-500 transition duration-500"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;