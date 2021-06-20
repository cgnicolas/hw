import React from 'react';
import App from '../src/App';
import API from '../src/api';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';

jest.mock('../src/api/index.js', () => {
  return {
    ...jest.requireActual('../src/api'),
    post: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve()),
  };
});
const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((init) => [init, mockSetState]),
}));

describe('<App/>', () => {
  const BAD_RESPONSE = 'Bad Response';
  const mockComments = [
    {
      id: 1,
      name: 'Cedric',
      created: 'a day ago',
      message: 'These test cases are amazing!',
    },
  ];

  it('should render the application', () => {
    const renderedModule = shallow(<App />);
    expect(renderedModule).toMatchSnapshot();
  });

  describe('Comment Retrieval', () => {
    it('should retrieve the comments successfully', async () => {
      API.get.mockImplementationOnce(() => Promise.resolve(mockComments));
      await act(async () => mount(<App />));
      expect(API.get).toHaveBeenCalled();
      expect(mockSetState).toHaveBeenCalledWith(mockComments);
    });

    it('should retrieve the comments with error', async () => {
      API.get.mockImplementationOnce(
        () => new Promise((resolve, reject) => reject(BAD_RESPONSE))
      );
      await act(async () => mount(<App />));
      expect(API.get).toHaveBeenCalled();
      expect(mockSetState).toHaveBeenCalledWith(BAD_RESPONSE);
    });
  });

  describe('Comment Creation', () => {
    it('should handle comment creation', () => {
      const renderedModule = shallow(<App />);
      const formContainer = renderedModule.find('FormContainer');
      formContainer.props().onSubmit();
      expect(API.post).toHaveBeenCalled();
    });

    it('should handle an error response from comment creation', async () => {
      const renderedModule = shallow(<App />);
      API.post.mockImplementationOnce(() => Promise.reject(BAD_RESPONSE))
      const formContainer = renderedModule.find('FormContainer')
      await formContainer.props().onSubmit();
      expect(mockSetState).toHaveBeenCalledWith(BAD_RESPONSE);
    });
  });

  describe('Comment Refresh', () => {
    
    it('should refresh the comments successfully', () => {
      const renderedModule = shallow(<App/>);
      API.get.mockImplementationOnce(() => Promise.resolve(mockComments));
      renderedModule.find('CommentsListContainer').props().onRefresh();
      expect(mockSetState).toHaveBeenCalledWith(mockComments);
    })

  })
});
