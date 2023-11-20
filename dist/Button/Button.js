import React from 'react';
import { button } from './Button.css.js';

const Button = (props) => {
  const { children } = props;
  return /* @__PURE__ */ React.createElement("button", { className: button }, children);
};

export { Button };
