"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const Input = ({
  id,
  label,
  disabled,
  errors,
  register,
  formatPrice,
  required,
  type = "text",
}) => {
  return (
    <div className="w-full relative my-6">
      {formatPrice && (
        <TbCurrencyTaka
          size={24}
          className="absolute top-5 left-2 z-10 text-neutral-700"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required: "Field is required!", minLength: id==="password" && 8 })}
        placeholder=""
        type={type}
        className={`peer w-full transform 
        duration-150 -translate-y-0.5
        transition outline-none bg-white p-4 pt-6 
        disabled:cursor-not-allowed 
        disabled:opacity-70 font-light border-2 
        rounded-md 
        ${formatPrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-rose-500" : "border-neutral-400"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-700"}
        `}
      />
      <label
        className={`
        absolute top-5 
        ${formatPrice ? "left-9" : "left-4"}
        origin-[0] z-10 
        transform duration-150 -translate-y-3 text-sm
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 
        peer-focus:-translate-y-9 peer-focus:bg-teal-500
      peer-focus:text-white peer peer-focus:py-1 peer-focus:px-4 peer-focus:rounded-sm 
        peer-focus:ring-2 peer-focus:ring-teal-700 peer-focus:transition 
        peer-focus:duration-150
        ${errors[id] ? "text-rose-500" : "text-zinc-500"}
        `}
      >
        {label}
      </label>
      {errors && (
        <div>
        {errors[id] && errors[id].type === "required" && (
            <span className="text-rose-500 text-sm">This field is required!</span>
        )}
        {errors[id] && errors[id].type === "minLength" && (
            <span className="text-rose-500 text-sm">Please, enter minimum 8 characters!</span>
        )}
        </div>
      )}
    </div>
  );
};

export default Input;
