import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Router from 'next/router';
import AuthService from '@/services/auth';
import { LoginParams } from '@/services/auth';
import { loginSchema } from '@/services/auth';

const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    const password = document.getElementById('password');
    password?.focus();
    setShowPassword(!showPassword);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [totp, setTotp] = useState<string>('');
  const [backupToken, setBackupToken] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: zodResolver(loginSchema),
  });

  const submitLogin = (data: LoginParams) => {
    console.log(data);
    setLoading(true);

    AuthService.login({
      email: data.email,
      password: data.password,
      totp,
      backupToken,
    })
      .then((resp) => {
        const {
          type = 'session',
          data: { expires_at, token, user_id },
        } = resp.data;

        AuthService.setToken(token);

        Router.push('/');
      })
      .catch(function (error) {
        if (error.response) {
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // console.log(error.request);
        } else {
          // console.log('Error', error.message);
        }
        // console.log(error.config);
      })

      // TODO: catch errors
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(submitLogin)}
      className="flex flex-col items-center w-full px-5 py-8 border xs:px-10 sm:px-16 bg-grey-200 border-grey-400 dark:bg-blue-1000 dark:border-grey-700 rounded-xl "
    >
      <div className="flex flex-col items-center w-full mb-5 sm:mb-8">
        <h1 className="mb-2.5 sm:mb-5 text-4xl font-bold sm:text-5xl dark:text-blue-100">
          Welcome Back
        </h1>
        <p className="mb-5 dark:text-blue-100">
          Need an account?{' '}
          <a
            href="/sign-up"
            className="text-blue-700 underline dark:text-blue-400"
          >
            Sign up here
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col items-center w-full gap-6">
        <div className={`flex flex-col w-full`}>
          <label
            htmlFor="email"
            className="mb-1 text-sm font-bold dark:text-blue-100"
          >
            Email Address
          </label>
          <input
            type="email"
            {...register('email')}
            id="email"
            placeholder="example@email.com"
            className="p-2 transition-colors border rounded-md dark:text-blue-100 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
          />
          {errors.email && (
            <span className="p-2 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={`flex flex-col w-full `}>
          <label
            htmlFor="password"
            className="mb-1 text-sm font-bold dark:text-blue-100"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              type={`${showPassword ? 'text' : 'password'}`}
              {...register('password')}
              id="password"
              placeholder="password"
              className="relative w-full p-2 text-blue-100 border rounded-md bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            <button
              className="absolute top-1/4 right-3 material-symbols-outlined dark:text-blue-200"
              onClick={togglePassword}
              type="button"
            >
              {showPassword ? 'visibility_off' : 'visibility'}
            </button>
          </div>
          {errors.password && (
            <span className="p-2 text-sm text-red-6 dark:text-red-400">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="py-2.5 px-10 rounded-md text-lg font-bold bg-blue-700 text-blue-100 hover:bg-blue-900 dark:bg-blue-500 dark:text-blue-100 transition-colors dark:hover:bg-blue-700 mb-6"
            disabled={loading}
          >
            Login
          </button>
          <a href="#">
            <small className="dark:text-blue-300 text-grey-600">
              Forgot your password?
            </small>
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;
