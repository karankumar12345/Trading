/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./ui/ui/label";
import { Input } from "./ui/ui/input";


export function ForgetPassword() {

  const [formData, setFormData] = useState({
    email: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formData);


    // Optionally reset form after submission
    setFormData({
      email: "",
    });
  };

  return React.createElement(
    "div",
    {
      className: "max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black",
    },
    React.createElement(
      "h2",
      { className: "font-bold text-xl text-neutral-800 dark:text-neutral-200" },
      "Forgot Password?"
    ),
    React.createElement(
      "p",
      { className: "text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300" },
      "Enter your email below to receive instructions for resetting your password."
    ),
    React.createElement(
      "form",
      { className: "my-8", onSubmit: handleSubmit },
      React.createElement(
        LabelInputContainer,
        { className: "mb-4" },
        React.createElement(Label, { htmlFor: "email" }, "Email Address"),
        React.createElement(Input, {
          id: "email",
          placeholder: "youremail@example.com",
          type: "email",
          value: formData.email,
          onChange: handleInputChange,
          required: true,
        })
      ),
      React.createElement(
        "button",
        {
          className:
            "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
          type: "submit",
        },
        "Send Reset Instructions →",
        React.createElement(BottomGradient, null)
      ),
      React.createElement(
        "div",
        null,
        "If You want Login Then Click ",
        React.createElement(
          "a",
          { href: "/login", className: "text-blue-800" },
          "Login"
        )
      )
    )
  );
}

const BottomGradient = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("span", {
      className:
        "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
    }),
    React.createElement("span", {
      className:
        "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
    })
  );
};

const LabelInputContainer = ({ children, className }) => {
  return React.createElement(
    "div",
    { className: cn("flex flex-col space-y-2 w-full", className) },
    children
  );
};
