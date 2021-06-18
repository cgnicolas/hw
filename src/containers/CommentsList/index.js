import React from 'react';
import { CommentsList } from '../../components';

export default function CommentsListContainer({ comments = [] }) {
  return (
    <CommentsList>
      {comments.map((comment) => {
        return <CommentsList.Comment {...comment} key={comment.id} />;
      })}
    </CommentsList>
  );
}
