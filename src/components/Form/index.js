import React from 'react';
import { Form, Input, Button, CommentTextArea } from './styles/form';

export default function FormComponent({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

FormComponent.Button = function ({ children, onClick, loading, disabled }) {
  return (
    <Button value="submit" disabled={disabled}>
      Post a Comment
    </Button>
  );
};

FormComponent.Input = function ({ placeholder, name, ...restProps }) {
  return (
    <React.Fragment>
      <label>{name}</label>
      <Input type="text" required placeholder={placeholder} {...restProps} />
    </React.Fragment>
  );
};

FormComponent.CommentTextArea = function ({ placeholder, ...restProps }) {
  return <CommentTextArea placeholder={placeholder} required {...restProps} />;
};
