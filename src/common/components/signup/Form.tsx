import React, { useState } from 'react';
import SpamPolicyModal from './SpamPolicyModal';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Country } from 'country-state-city';

const Form = () => {
  const [openSpamPolicyModal, setOpenSpamPolicyModal] = useState(false);
  const closeSpamPolicyModal = () => {
    setOpenSpamPolicyModal(false);
  };

  const [openTermsAndConditionsModal, setOpenTermsAndConditionsModal] =
    useState(false);
  const closeTermsAndConditionsModal = () => {
    setOpenTermsAndConditionsModal(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    const password = document.getElementById('password');
    password?.focus();
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPassword = () => {
    const confirmPassword = document.getElementById('confirmPassword');
    confirmPassword?.focus();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const signUpSchema = z
    .object({
      company: z.string().min(3),
      firstName: z.string().min(2),
      lastName: z.string().min(2),
      country: z.string(),
      jobTitle: z.string().optional(),
      mobilePhoneNumber: z.string(),
      email: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
      agreeSpamPolicy: z.literal(true, {
        invalid_type_error: 'Please accept our SPAM policy to sign up.',
      }),
      agreeTerms: z.literal(true, {
        invalid_type_error:
          'Please accept our terms and conditions to sign up.',
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match. Please try again.',
      path: ['confirmPassword'],
    });

  type SignUpParams = z.infer<typeof signUpSchema>;

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<SignUpParams>({
    resolver: zodResolver(signUpSchema),
  });

  // COUNTRY SELECTOR
  let countries = Country.getAllCountries();

  const submitLogin = (data: SignUpParams) => {
    console.log(data);
    setLoading(true);
  };

  return (
    <>
      <SpamPolicyModal
        isOpen={openSpamPolicyModal}
        closeModal={closeSpamPolicyModal}
      />
      <TermsAndConditionsModal
        isOpen={openTermsAndConditionsModal}
        closeModal={closeTermsAndConditionsModal}
      />
      <form
        onSubmit={handleSubmit(submitLogin)}
        className="flex flex-col items-center w-full max-w-2xl px-5 py-8 border xs:px-10 sm:px-16 bg-grey-200 border-grey-400 dark:bg-blue-1000 dark:border-grey-700 rounded-xl"
      >
        <div className="flex flex-col w-full mb-5 -full r sm:mb-8">
          <h1 className="mb-2.5 sm:mb-5 text-4xl font-bold sm:text-5xl dark:text-blue-100 text-grey-1000">
            Create your account
          </h1>
          <p className="mb-5 dark:text-blue-100 text-grey-1000">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-700 underline dark:text-blue-400"
            >
              Login here
            </a>
            .
          </p>
        </div>
        <div className="grid w-full gap-6 grid-col-1 xs:grid-cols-2">
          <div className={`flex flex-col w-full xs:col-span-2 `}>
            <label
              htmlFor="company"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Company
            </label>
            <input
              type="company"
              {...register('company')}
              id="company"
              placeholder="Your company"
              className="p-2 transition-colors border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.company && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.company.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="firstName"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              First name
            </label>
            <input
              type="firstName"
              {...register('firstName')}
              id="firstName"
              placeholder="John"
              className="p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.firstName && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="lastName"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Last name
            </label>
            <input
              type="lastName"
              {...register('lastName')}
              id="lastName"
              placeholder="Doe"
              className="p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.lastName && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className={`relative flex flex-col w-full`}>
            <label
              htmlFor="Country"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Country
            </label>

            <select
              {...register('country')}
              className="px-2 border rounded-md appearance-none dark:text-blue-100 text-grey-1000 py-[9px] bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            >
              {countries.map((country) => {
                return (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                );
              })}
            </select>

            <span className="absolute right-2 text-grey-1000 dark:text-blue-100 text-grey-1000 material-symbols-outlined top-1/2 pointer-events-none">
              expand_more
            </span>

            {errors.country && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.country.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="jobTitle"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Job Title
            </label>
            <input
              type="jobTitle"
              {...register('jobTitle')}
              id="jobTitle"
              placeholder="Developer"
              className="p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.jobTitle && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.jobTitle.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="mobilePhoneNumber"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Mobile phone number
            </label>
            <input
              type="tel"
              {...register('mobilePhoneNumber')}
              id="mobilePhoneNumber"
              placeholder="1-234-567-8910"
              className="p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.mobilePhoneNumber && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.mobilePhoneNumber.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="email"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Email Address
            </label>
            <input
              type="email"
              {...register('email')}
              id="email"
              placeholder="johndoe@email.com"
              className="p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
            />
            {errors.email && (
              <span className="p-2 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="password"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type={`${showPassword ? 'text' : 'password'}`}
                {...register('password')}
                id="password"
                placeholder=""
                className="w-full p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
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
              <span className="p-2 text-sm text-red-60000 dark:text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full`}>
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-sm font-bold dark:text-blue-100 text-grey-1000"
            >
              Confirm password
            </label>
            <div className="relative w-full ">
              <input
                type={`${showConfirmPassword ? 'text' : 'password'}`}
                {...register('confirmPassword')}
                id="confirmPassword"
                placeholder=""
                className="w-full p-2 border rounded-md dark:text-blue-100 text-grey-1000 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
              />
              <button
                className="absolute top-1/4 right-3 material-symbols-outlined dark:text-blue-200"
                onClick={toggleConfirmPassword}
                type="button"
              >
                {showConfirmPassword ? 'visibility_off' : 'visibility'}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="p-2 text-sm text-red-60000 dark:text-red-400">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className={`flex flex-col w-full xs:col-span-2`}>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('agreeSpamPolicy')}
                id="agreeSpamPolicy"
                className="w-4 h-4 p-2 border rounded-md dark:text-blue-100 text-grey-1000 dark:accent-blue-500 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
              />
              <label
                htmlFor="agreeSpamPolicy"
                className="ml-2 text-sm font-bold dark:text-blue-100 text-grey-1000"
              >
                I agree to abide by the{' '}
                <span
                  onClick={() => setOpenSpamPolicyModal(!openSpamPolicyModal)}
                  className="text-blue-700 dark:text-blue-400"
                >
                  SPAM policy
                </span>
                .
              </label>
            </div>
            {errors.agreeSpamPolicy && (
              <span className="p-2 text-sm text-red-60000 dark:text-red-400">
                {errors.agreeSpamPolicy.message}
              </span>
            )}
          </div>

          <div className={`flex flex-col w-full xs:col-span-2`}>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('agreeTerms')}
                id="agreeTerms"
                className="w-4 h-4 p-2 border rounded-md dark:text-blue-100 text-grey-1000 dark:accent-blue-500 bg-grey-100 border-grey-500 placeholder:text-grey-500 dark:placeholder:text-grey-400 dark:bg-blue-900 dark:border-grey-600 focus:border-blue-500 dark:focus:border-blue-300 focus:outline-none"
              />
              <label
                htmlFor="agreeTerms"
                className="ml-2 text-sm font-bold dark:text-blue-100 text-grey-1000"
              >
                I agree to abide to{' '}
                <p
                  onClick={() =>
                    setOpenTermsAndConditionsModal(!openTermsAndConditionsModal)
                  }
                  className="text-blue-700 dark:text-blue-400"
                >
                  all terms and conditions
                </p>
                .
              </label>
            </div>
            {errors.agreeTerms && (
              <span className="p-2 text-sm text-red-60000 dark:text-red-400">
                {errors.agreeTerms.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center mt-4 xs:col-span-2">
            <button
              type="submit"
              className=" cursor-pointer py-2.5 px-20  rounded-md text-lg font-bold bg-blue-700 text-blue-100  hover:bg-blue-900 dark:bg-blue-500 dark:text-blue-100 transition-colors dark:hover:bg-blue-700 mb-6"
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
