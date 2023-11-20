import React from 'react';
import { ReactNode } from 'react';
import { button } from './Button.css';

type ButtonProps = {
  children: ReactNode,
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button className={button}>
    {children}
  </button>;
};
