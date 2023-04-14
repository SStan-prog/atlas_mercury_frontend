import React from 'react';
import Form from './Form';

const Index = () => {
  return (
    <div className="flex flex-col w-full max-w-xl px-5 mx-auto">
      <div className="flex flex-col items-center mb-14">
        <h1 className="mb-6 text-4xl font-bold sm:text-6xl dark:text-blue-100">
          Welcome Back
        </h1>
        <p className="dark:text-blue-100">
          Need an account?{' '}
          <a href="#" className="text-blue-700 underline dark:text-blue-400">
            Sign up here
          </a>
          .
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Index;
