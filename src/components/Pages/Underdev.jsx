import React from "react";
import Lottie from "lottie-react";
import Atom from "../../Lottiefile/undercons.json";

const Underdev = () => {
  return (
    <>
      <section className="w-full">
        <div className="mt-40 flex justify-center items-center">
          <Lottie className="w-96" animationData={Atom} />
        </div>
      </section>
    </>
  );
};

export default Underdev;
