import React from 'react';
import Form from './Form';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="flex justify-center w-full gap-32 px-5 py-10 mx-auto xl:justify-between max-w-7xl">
      <Form />
      <div className="flex-col hidden w-full max-w-2xl mb-10 xl:flex gap-14">
        <Image
          src="/logos/logo-light.svg"
          alt="Swift SMS Gateway"
          width={250}
          height={150}
          className="block dark:hidden"
        />
        <Image
          src="/logos/logo-dark.svg"
          alt="Swift SMS Gateway"
          width={250}
          height={150}
          className="hidden dark:block"
        />
        <ul className="flex flex-col gap-10 list-none">
          <li className="flex w-full gap-5">
            <div className="flex flex-col items-center justify-center w-6 h-6 mt-1 bg-blue-700 rounded-full dark:bg-blue-500">
              <span className="text-blue-100 material-symbols-outlined">
                check
              </span>
            </div>
            <div className="flex flex-col text-grey-1000 dark:text-blue-100">
              <span className="mb-2 text-2xl font-bold">Appeal Point #1</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li className="flex w-full gap-5">
            <div className="flex flex-col items-center justify-center w-6 h-6 mt-1 bg-blue-700 rounded-full dark:bg-blue-500">
              <span className="text-blue-100 material-symbols-outlined">
                check
              </span>
            </div>
            <div className="flex flex-col text-grey-1000 dark:text-blue-100">
              <span className="mb-2 text-2xl font-bold">Appeal Point #2</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li className="flex w-full gap-5">
            <div className="flex flex-col items-center justify-center w-6 h-6 mt-1 bg-blue-700 rounded-full dark:bg-blue-500">
              <span className="text-blue-100 material-symbols-outlined">
                check
              </span>
            </div>
            <div className="flex flex-col text-grey-1000 dark:text-blue-100">
              <span className="mb-2 text-2xl font-bold">Appeal Point #3</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
