import React from 'react';
import { Button } from '../shared';

export default function CommentsList({ children, onRefresh }) {
  return (
    <div className="flex flex-grow flex-col mt-4 justify-center">
      <Button onClick={onRefresh} className="shadow-md">Refresh Comments</Button>
      <ul className="flex-grow h-0 list-none mt-4 space-y-2 w-full overflow-y-auto">{children}</ul>
    </div>
  );
}

CommentsList.Comment = function({ name, message, created }) {
  const createdString = `${name} at ${created}`;
  return (
    <div className="py-4 px-8 bg-white border-gray-300 rounded-md">
      <p>{message}</p>
      <small>{createdString}</small>
    </div>
  );
};

CommentsList.Skeleton = function(){
  return (
  <div className="py-4 px-8 bg-white border-gray-300 rounded-md">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-blue-400 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-blue-400 rounded"></div>
          <div className="h-4 bg-blue-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
