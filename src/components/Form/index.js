import React from 'react';
import { Button } from '../shared';

export default function FormComponent({ children, className, ...restProps }) {
  return <form {...restProps} className={`flex flex-col justify-center ${className}`}>{children}</form>;
}

FormComponent.Button = function ({ children, onClick, loading, disabled }) {
  return (
    <Button disabled={disabled} className="shadow-md">
      {children}
    </Button>
  );
};

FormComponent.MessageContainer = function ({children}) {
  return (
    <div className="flex flex-row space-x-2 items-center mt-2 w-full">
      {children}
    </div>
  )
}

FormComponent.Input = function ({ placeholder, name, ...restProps }) {
  return (
    <div className="relative mt-8">
      <small className="absolute -top-5 left-0 font-bold">{name}</small>
      <input type="text" required placeholder={placeholder} className="shadow-md w-full rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" {...restProps} />
    </div>
  );
};

FormComponent.MessageInput = function ({ placeholder, ...restProps }) {
  const noLineBreaks = (e) => {
    const { charCode } = e;
    if(charCode === 13) {
      e.preventDefault();
    }
  }
  return <textarea onKeyPress={noLineBreaks} placeholder={placeholder} required className="bg-white shadow-md p-2 w-full h-24 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" {...restProps} />;
};
