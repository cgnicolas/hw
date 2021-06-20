import React, { useEffect, useState } from 'react';
import { CommentsList, Form } from './containers/';
import API from './api';
import { sortComments } from './utils';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  /*
    Fetch Existing Comments
  */
  const getAndSetComments = () => {
    setLoading(true);
    API.get().then((response) => {
      const sortedComments = sortComments(response);
      setComments(sortedComments);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    getAndSetComments();
  }, []);

  const handleCreate = (commentBody) => {
    setLoading(true);
    return API.post(commentBody)
      .then(() => {
        return getAndSetComments();
      })
      .catch((err) => {
        setError(err);
        return err;
      })
  };

  const refreshComments = () => {
    getAndSetComments();
  }

  return (
    <div className="bg-blue-100 h-screen w-screen">
      <div className="m-auto flex flex-col w-1/2 h-full min-w-xs md:px-0">
        <Form loading={loading} onSubmit={handleCreate} error={error} />
        <CommentsList comments={comments} loading={loading} error={error} onRefresh={refreshComments} />
      </div>
    </div>
  );
}

export default App;
