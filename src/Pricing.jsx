import React, { useState } from "react";
import "./tailwind.css";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-blue-700">
      {" "}
      <div className="pb-20 pt-12 bg-gray-800 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        {" "}
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-yellow-400">Find Your Perfect Fit</span>{" "}
            {/* Updated text color class */}
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
              Choose your best plan
            </h2>
            <p className="mb-6 text-gray-300">
              {" "}
              Select the plan that suits your needs and benefit from our
              analytics tools.
            </p>
            <label className="mx-auto bg-gray-900 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
              {" "}
              {/* Updated background and text color classes */}
              <input
                type="checkbox"
                className="peer appearance-none"
                checked={!isMonthly}
                onChange={handleChange}
              />
              <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-gray-900 after:rounded-lg duration-300 ease-in-out after:w-[30rem] after:h-10 after:bg-blue-500 after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer">
                {" "}
              </span>
              <div className="flex absolute text-white text-sm font-bold">
                <div
                  className={
                    isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                  }
                >
                  Monthly
                </div>
                <div className={isMonthly && "text-gray-400"}>Yearly</div>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-indigo-600 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  Beginner
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    $0
                  </div>
                  <div className="text-gray-100">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>
                <p className="mt-4 mb-6 text-gray-100 leading-loose text-left">
                  {" "}
                  The perfect way to get started and get used to our tools.
                </p>
                <ul className="mb-2 text-white">
                  {pricingData.map((item, index) => (
                    <li
                      className={`mb-4 flex ${
                        index >= pricingData.length - 3 ? "line-through" : ""
                      }`}
                      key={`${item}-${index}`}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-blue-500 font-bold leading-loose mt-16 cursor-pointer">
                  {" "}
                  Get Started
                </div>
              </div>
            </div>
            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="px-8 py-8 bg-indigo-500 rounded-3xl">
                <h4 className="mb-2 text-2xl font-bold font-heading text-white text-left">
                  {" "}
                  {/* Updated text size class */}
                  Standard
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? "$19" : "$180"}
                  </div>
                  <div className="text-gray-100">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>
                <p className="mt-8 mb-8 text-gray-100 leading-loose text-left">
                  {" "}
                  {/* Updated text color class */}
                  Unlock more features and elevate your data analysis.
                </p>
                <ul className="mb-2 text-white">
                  {pricingData.map((item, index) => (
                    <li
                      className={`mb-4 flex ${
                        index >= pricingData.length - 2 ? "line-through" : ""
                      }`}
                      key={`${item}-${index}`}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-block text-center py-2 px-4 w-full bg-blue-500 font-bold leading-loose transition duration-200 mt-20 cursor-pointer">
                  {" "}
                  Get Started
                </div>
              </div>
            </div>
            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-violet-950 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  Premium
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? "$36" : "$390"}
                  </div>
                  <div className="text-gray-100">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>
                <p className="mt-4 mb-6 text-gray-100 leading-loose text-left">
                  {" "}
                  {/* Updated text color class */}
                  Experience the full power of our analytic platform
                </p>
                <ul className="mb-2 text-white">
                  {" "}
                  {/* Updated text color class */}
                  {pricingData.map((text, index) => (
                    <li className="mb-4 flex" key={`${text}-${index}`}>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-blue-500 font-bold leading-loose mt-16 cursor-pointer">
                  {" "}
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
