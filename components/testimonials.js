import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h1 className="text-2xl font-bold text-blue-400 leading-normal ">
              SPECIALIZATION
            </h1>
            <p className="text-xl leading-10">AI & Machine Learning</p>
            <p className="text-xl leading-10">Cloud Migration</p>
            <p className="text-xl leading-10">Data Analytics & Visualization</p>
            <p className="text-xl leading-10">Smart Application Development</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h1 className="text-2xl font-bold text-blue-400 leading-normal ">
              CAPABILITIES
            </h1>
            <p className="text-xl leading-10">Marketing Analytics</p>
            <p className="text-xl leading-10">Contact Center AI</p>
            <p className="text-xl leading-10">Data Warehouse Migrations</p>
            <p className="text-xl leading-10">Document Processing</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h1 className="text-2xl font-bold text-blue-400 leading-normal ">
              SOLUTIONS
            </h1>
            <p className="text-xl leading-10">Omnichannel Customer Engagement</p>
            <p className="text-xl leading-10">Java Application Modernization</p>
            <p className="text-xl leading-10">Improper Payments</p>
            <p className="text-xl leading-10">SpringML Vision AI Solutions</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
