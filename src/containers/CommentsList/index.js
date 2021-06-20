import React from 'react';
import { CommentsList } from '../../components';

export default function CommentsListContainer({ comments = [], onRefresh, loading, error}) {

  const displayComments = () => {
      if(error) {
        return (
          <p>Something went wrong loading the comments. Please try again.</p>
        )
      }
      if(!!comments.length || loading){
        return (
          <React.Fragment>
            {loading && <CommentsList.Skeleton/>}
            {comments.map((comment) => {
              return <CommentsList.Comment {...comment} key={comment.id} />;
            })}
          </React.Fragment>
        )
      }
      return (
        <p>No posts to display. You should change that!</p>
      )
  }

  return (
    <CommentsList onRefresh={onRefresh}>
      {displayComments()}
    </CommentsList>
  );
}
