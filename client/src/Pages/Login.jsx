/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IconCreditCard } from "@tabler/icons-react"; // Subscription Icon
import { useNavigate } from "react-router-dom";
import LabelInputContainer from "@/components/ui/LabelInputContainer";
import BottomGradient from "@/components/ui/BottomGradient";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-md w-full mx-auto mt-16 rounded-xl p-6 md:p-8 shadow-lg bg-white dark:bg-black transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="your@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </LabelInputContainer>

          {/* Login Button */}
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-gray-950 dark:to-gray-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-md"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>

          {/* Divider */}
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          {/* Subscription Button */}
          <div className="flex flex-col space-y-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-white dark:text-white rounded-md h-10 font-medium shadow-md bg-gray-900 dark:bg-gray-800 dark:shadow-sm transition-colors duration-300"
              type="button"
            >
              <IconCreditCard className="h-5 w-5 text-white" />
              <span className="text-white text-sm">Purchase Subscription</span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Bottom Gradient Effect

// Label + Input Wrapper
