import React, { useState } from 'react';

type InputError = 
    |  { type: 'required'; message: string }
    |  { type: 'validation'; message: string };

type InputType = 'text' | 'number';

interface InputFieldsProps {
    type: InputType;
    value: string | number;
    onChange: (value: string | number) => void;
    required?: boolean;
    error?: InputError;
}

const InputField = ({
    type,
    value,
    onChange,
    required = false,
    error,
}: InputFieldsProps): React.ReactNode => {
    const [localError, setLocalError] = useState<InputError | null>(null);

    const isString = (val: unknown): val is string => typeof val === 'string';

    const isNumber = (val: unknown): val is number => typeof val === 'number';

    const handleChange = (event) => {
        const inputValue = event.target.value;

        if (type === 'number' && isNaN(Number(inputValue))) {
            setLocalError({ type: 'validation', message: 'Must be a valid number' });
        } else {
            setLocalError(null);
            onChange(type === 'number' ? Number(inputValue) : inputValue);
        }
    }

    const handleBlur = () => {
        if (required && !value) {
            setLocalError({ type: 'required', message: 'This field is required' });
        }
    }

    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onblur={handleBlur}
            />
            {(localError || error) && (
                <span className="error-message">
                    {localError?.message || error?.message}
                </span>
            )}
        </div>
    );
}