import React from 'react';
import Form from './Form';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="flex flex-col w-full max-w-xl px-5 mx-auto">
      <div className="flex flex-col items-center mb-10">
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
      </div>
      <Form />
    </div>
  );
};

export default Index;
