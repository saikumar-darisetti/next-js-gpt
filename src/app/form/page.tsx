"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";

export default function FormPage() {
    const [successMessage, setSuccessMessage] = useState("");

    const initialValues = { name: "", email: "", password: "" };

    const validate = (state: typeof initialValues) => {
        const errors: Partial<Record<keyof typeof initialValues, string>> = {};

        if (!state.name.trim()) errors.name = "Name is required.";

        if (!state.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
            errors.email = "Please enter a valid email address.";
        }

        if (!state.password) {
            errors.password = "Password is required.";
        } else if (state.password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }

        return errors;
    };

    const {
        formState,
        errors,
        handleChange,
        handleSubmit,
        isValid,
        hasAttemptedSubmit
    } = useForm({
        initialValues,
        validate,
        onSubmit: () => {
            setSuccessMessage("Account created successfully!");
        }
    });

    return (
        <div className="max-w-md mx-auto p-6 mt-10 border rounded-xl shadow-sm bg-white">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Registration Form</h1>

            {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 font-medium rounded-lg">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                    label="Name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    errorMessage={errors.name}
                    onChange={handleChange}
                />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    errorMessage={errors.email}
                    onChange={handleChange}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formState.password}
                    errorMessage={errors.password}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    disabled={hasAttemptedSubmit && !isValid}
                    className="mt-2"
                >
                    Create Account
                </Button>
            </form>
        </div>
    );
}