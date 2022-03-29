import React from 'react';

export type ButtonProps = {
  disabled: boolean;
  variant: string;
  name: string;
};

export const Button = ({ name, variant, disabled }: ButtonProps) => {
  console.log({ disabled });

  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-blue-500 hover:bg-blue-400'
          : 'bg-green-500 hover:bg-green-400'
      } ${
        disabled ? 'bg-gray-300 hover:bg-gray-300' : ''
      } rounded p-2 text-white`}
    >
      {name}
    </button>
  );
};
