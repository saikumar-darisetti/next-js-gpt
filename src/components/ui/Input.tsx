import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
}

export default function Input({ label, errorMessage, id, ...props }: InputProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="flex flex-col gap-1 w-full relative">
            <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={inputId}
                className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-all ${errorMessage ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                    }`}
                {...props}
            />
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
    );
}