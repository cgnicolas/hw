import React from 'react';
import { mount } from 'enzyme';
import { CommentsList } from '../../../src/containers';

describe('<CommentsList/>', () => {
  const mockProps = {
    comments: [
      {
        id: 1,
        name: 'Cedric',
        created: 'a day ago',
        message: 'I give this Test Suite a 10 out of 10!',
      },
    ],
  };

  it('should render', () => {
    const renderedModule = mount(<CommentsList {...mockProps} />);
    expect(renderedModule).toMatchSnapshot();
  });

  it('should render with no comments provided', () => {
    const renderedModule = mount(<CommentsList />);
    expect(renderedModule).toMatchSnapshot();
  });
});
