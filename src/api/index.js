const url = 'http://localhost:3001';

const API = {
  call(url, method, body = {}) {
    const data = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    if (Object.keys(body).length > 0) {
      data.body = JSON.stringify(body);
    }
    return fetch(url, data).then((response) => {
      return response.json();
    });
  },

  get() {
    const path = '/getComments';
    return this.call(url + path, 'get');
  },

  post(body = {}) {
    const path = '/createComment';
    return this.call(url + path, 'post', body);
  },

  delete() {
    const path = '/deleteComments';
    return this.call(url + path, 'delete');
  },
};

export default API;
