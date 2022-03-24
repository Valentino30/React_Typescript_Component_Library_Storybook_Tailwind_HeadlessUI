import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="mt-10 bg-yellow-100 p-5 rounded-md">
      {children || 'Hello'}
    </div>
  );
};
