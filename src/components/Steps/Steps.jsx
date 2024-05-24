import React from "react";
import Step1 from "../../../src/components/assests/img/step-1.png";
import Step2 from "../../../src/components/assests/img/step-2.png";
import Step3 from "../../../src/components/assests/img/step-3.gif";
import Step4 from "../../../src/components/assests/img/step-4.png";
import Step5 from "../../../src/components/assests/img/step-5.png";

const Steps = () => {
  const stepsdata = [
    {
      step: "STEP-1",
      title: "Base Ingredients",
      imageSrc: Step1,
      imageWidth: 60,
      imageHeight: 60,
    },
    {
      step: "STEP-2",
      title: "Development of Formulation",
      imageSrc: Step2,
      imageWidth: 60,
      imageHeight: 60,
    },
    {
      step: "STEP-3",
      title: "Production processes",
      imageSrc: Step3,
      imageWidth: 70,
      imageHeight: 70,
    },
    {
      step: "STEP-4",
      title: "Ensure consistency.",
      imageSrc: Step4,
      imageWidth: 70,
      imageHeight: 70,
    },
    {
      step: "STEP-5",
      title: "Distribution & Packaging",
      imageSrc: Step5,
      imageWidth: 60,
      imageHeight: 60,
    },
  ];
  return (
    <>
      <section className=" flex justify-center items-center mt-3">
        {/* our delivery process */}

        <div className="w-10/12 flex justify-center items-center shadow-xl rounded-lg lg:px-20 lg:py-10 md:px-10 md:py-5 sm:px-10 sm:py-5 bg-deep-orange-100">
          <div className="flex justify-center items-center text-wrap flex-col">
            <h2 className="font-bold lg:text-2xl md:text-2xl md:text-lg text-center text-wrap text-white">
              Our Methodology - From Procurement to Delivery
            </h2>
            <p className="w-5/6 font-bold lg:text-md md:text-md sm:text-sm text-center text-white text-wrap">
              We commence with premium materials and guarantee superior
              medication distribution. Our procedure assures perfection at each
              stage, committed to your health and welfare.
            </p>

            <div className="flex items-center flex-wrap justify-center mt-4 gap-6">
              {stepsdata.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-400 background-bg-related-logo p-6 gap-2 rounded-lg flex items-center justify-center flex-col"
                >
                  <div>
                    <img
                      src={step.imageSrc}
                      width={step.imageWidth}
                      height={step.imageHeight}
                      alt=""
                    />
                  </div>
                    <p className="text-xl font-bold text-center text-white">
                      {step.title}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
