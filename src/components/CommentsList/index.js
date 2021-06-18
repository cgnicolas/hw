import React from 'react';
import {
  List,
  CommentContainer,
  CommentMessage,
  CommentTimestamp,
} from './styles/commentsList';

export default function CommentsList({ children }) {
  return <List>{children}</List>;
}

CommentsList.Comment = function ({ name, message, created }) {
  const createdString = `${name} at ${created}`;
  return (
    <CommentContainer>
      <CommentMessage>{message}</CommentMessage>
      <CommentTimestamp>{createdString}</CommentTimestamp>
    </CommentContainer>
  );
};
