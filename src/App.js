import React, { useEffect, useState } from 'react';
import { CommentsList, Form } from './containers/';
import API from './api';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  /*
    Fetch Existing Comments
  */
  useEffect(() => {
    API.get()
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCreate = (commentBody) => {
    setLoading(true);
    return API.post(commentBody)
      .then(() => {
        return API.get();
      })
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="appContainer">
      <Form loading={loading} onSubmit={handleCreate} error={error} />
      <CommentsList comments={comments} loading={loading} error={error} />
    </div>
  );
}

export default App;
