import React from 'react'
import Step1 from "../../../src/components/assests/img/step-1.png";
import Step2 from "../../../src/components/assests/img/step-2.png";
import Step3 from "../../../src/components/assests/img/step-3.gif";
import Step4 from "../../../src/components/assests/img/step-4.png";
import Step5 from "../../../src/components/assests/img/step-5.png";

const Steps = () => {
  return (
    <>
        <section>
                    {/* our delivery process */}

        <div className="absolute w-full -bottom-10 flex justify-center items-center">
          <div className="flex justify-center items-center text-wrap flex-col">
            <h2 className="font-bold text-4xl text-white text-center text-wrap mb-6">
              Our Methodology: From Procurement to Delivery
            </h2>
            <p className="w-4/6 font-bold text-white text-center text-wrap">
              We commence with premium materials and guarantee superior
              medication distribution. Our procedure assures perfection at each
              stage, committed to your health and welfare.
            </p>


            <div className="flex items-center flex-wrap justify-center mt-4 gap-6">
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img src={Step1} alt="" />
                </div>
                <h2 className="font-bold mt-3 text-white">STEP-1</h2>
                <div>
                  <p className="text-2xl font-bold text-white">
                    Base Ingredients
                  </p>
                </div>
              </div>
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img width={60} height={60} src={Step2} alt="" />
                </div>
                <h2 className="font-bold mt-3 text-white">STEP-2</h2>
                <div>
                  <p className="text-2xl font-bold text-white">
                    Development of Formulation
                  </p>
                </div>
              </div>
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img width={70} height={70} src={Step3} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-3</h2>
                <div>
                  <p className="text-2xl font-bold text-white">
                    Production processes
                  </p>
                </div>
              </div>

              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img width={70} height={70} src={Step4} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-4</h2>
                <div>
                  <p className="text-2xl font-bold text-white">
                    Ensure consistency.
                  </p>
                </div>
              </div>

              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img src={Step5} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-5</h2>
                <div>
                  <p className="text-2xl font-bold text-white">
                    Distribution & Packaging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Steps