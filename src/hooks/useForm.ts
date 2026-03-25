import { useState, ChangeEvent, FormEvent } from "react";

interface UseFormProps<T> {
    initialValues: T;
    validate: (values: T) => Partial<Record<keyof T, string>>;
    onSubmit: (values: T) => void;
}

export function useForm<T extends Record<string, any>>({ initialValues, validate, onSubmit }: UseFormProps<T>) {
    const [formState, setFormState] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

    // Compute real-time validity 
    const currentErrors = validate(formState);
    const isValid = Object.values(currentErrors).every(err => !err);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newState = { ...formState, [name]: value };
        setFormState(newState);

        // Dynamic re-validation if they've already attempted to submit
        if (hasAttemptedSubmit) {
            setErrors(validate(newState));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasAttemptedSubmit(true);

        const formErrors = validate(formState);
        setErrors(formErrors);

        const isSubmitValid = Object.values(formErrors).every(err => !err);
        if (isSubmitValid) {
            onSubmit(formState);
        }
    };

    return {
        formState,
        errors: hasAttemptedSubmit ? errors : {},
        handleChange,
        handleSubmit,
        isValid,
        hasAttemptedSubmit,
    };
}
