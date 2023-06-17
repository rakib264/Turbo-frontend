"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from '../../components/inputs/Input'

const Login = () => {

  const [userCredentials, setUserCredentials] = useState({});  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setUserCredentials({
        ...userCredentials, data
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex items-center justify-center 
   inset-0 w-full bg-neutral-800/70 fixed overflow-x-hidden
   overflow-y-auto z-50 outline-none focus:outline-none px-20"
      >
        <div
          className="bg-neutral-100 w-full px-4 py-6 border-2 
    border-gray-800 rounded-md"
        >
          <div className="w-full flex flex-col py-4">
            <Image
              src="/assets/logo/logo.png"
              alt="Logo"
              width="400"
              height="200"
              className="mx-auto"
            />
            <div className="mx-auto pt-3 text-center text-black 
                 text-3xl font-semibold">
              Admin Login
            </div>
          </div>
          <div
            className="w-full md:w-4/6 lg:w-3/6 
            xl:w-3/5 h-full md:h-auto lg:h-auto my-6 mx-auto"
          >
            <Input
              id="email"
              label="Email"
              required
              register={register}
              disabled={false}
              errors={errors}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              required
              register={register}
              disabled={false}
              errors={errors}
            />
            <button 
              type="submit"
              className={`w-full mx-auto bg-green-500 px-6 py-3 rounded-md
              text-white font-semibold text-xl cursor-pointer 
                disabled:cursor-not-allowed transition duration-150`}>
            Login
          </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
