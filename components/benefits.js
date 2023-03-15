import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex flex-wrap items-center w-full lg:w-1/3 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center w-full lg:w-2/3 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="flex-row">
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Collaborative Outcomes</h1>
              <p>AI and ML Implementations</p>
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Experts</h1>
              <p>Our team is certified in industry leading</p>
              <p>technologies</p>
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Best in Class Experts</h1>
              <p>Certified Cloud Practitioners</p>
          </div>
          <div className="flex-row">
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Partnerships</h1>
              <p>Cloud first delivery model</p>
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Methodology</h1>
              <p>We drive leapfrog innovation while working</p>
              <p>with existing data & processes</p>
            <div
              className={`flex items-center justify-center w-full lg:w-1/3 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <Image
                src={data.image}
                width="100"
                height="100"
                alt="Benefits"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Speed</h1>
              <p>We empower the ‘doers’ to make smart</p>
              <p>decisions with data</p>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
