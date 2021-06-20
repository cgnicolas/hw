import React, { useState } from 'react';
import { Form } from '../../components';
import { v4 as uuidv4 } from 'uuid';
export default function FormContainer({ onSubmit, loading }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const formSubmission = (e) => {
    e.preventDefault();
    onSubmit({
      message,
      name,
      id: uuidv4(),
    }).then(() => {
      setMessage('');
    });
  };

  return (
    <Form onSubmit={formSubmission}>
      <Form.Input
        name="Name"
        placeholder="Who are you posting as?"
        value={name}
        id="user-name"
        onChange={({ target: { value } }) => setName(value)}
      />
      <Form.MessageContainer>
        <Form.MessageInput
          placeholder="Join the discussion!"
          value={message}
          id="user-message"
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <Form.Button disabled={loading || !message}>Post</Form.Button>
      </Form.MessageContainer>
    </Form>
  );
}
