import React from 'react';

// Tipo usado para hacer el handlig de errores del boton

type ButtonError = {type: 'disabled'; message: string };

interface ButtonProps<T> {
    value: T;
    onClick?: (value: T) => void;
    disabled?: boolean;
    error?: ButtonError;
}

type RestrictedProps<T> = Omit<ButtonProps<T>, 'onClick'> & {
    onClick?: (value: T) => void;
  };

const Button = <T, >({value, onClick, disabled, error}: RestrictedProps<T>) => {

    const onClickHandler = () => {
        if (disabled && error) {
            console.log(error.message);
            return;
        }
        onClick?.(value);
    };

    // El error apareceria como tooltip en el si llegase a manejarse un error en el 
    return (
        <button onclick={onClickHandler} disabled={disabled} title={error?.message || ''}>
            {String(value)}
        </button>
    );
};

export default Button;