import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import { Form } from '../../../src/containers';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((init) => [init, mockSetState]),
}));

describe('<Form/>', () => {
  it('should render successfully', () => {
    const renderedModule = shallow(<Form />);
    expect(renderedModule).toMatchSnapshot();
  });

  describe('set by onChange', () => {
    const event = {
      target: { value: 'Wow such a good mocked value! Impressed huh?' },
    };
    describe('setName', () => {
      it('should set the name of the user', () => {
        const renderedModule = mount(<Form />);
        console.log(renderedModule.find('input#user-name').debug());
        act(() =>
          renderedModule.find('input#user-name').props().onChange(event)
        );
        expect(mockSetState).toHaveBeenCalledWith(event.target.value);
      });
    });

    describe('setMessage', () => {
      it('should set the message input by the user', () => {
        const renderedModule = mount(<Form />);
        console.log(renderedModule.find('textarea#user-message').debug());
        act(() =>
          renderedModule.find('textarea#user-message').props().onChange(event)
        );
        expect(mockSetState).toHaveBeenCalledWith(event.target.value);
      });
    });
  });

  describe('formSubmission', () => {
    const props = {
      onSubmit: jest.fn(() => Promise.resolve()),
    };
    it('should submit the form', () => {
      const renderedModule = shallow(<Form {...props} />);
      renderedModule
        .find('FormComponent')
        .props()
        .onSubmit({ preventDefault: jest.fn() });
    });
  });
});
