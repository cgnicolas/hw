import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../../src/components';

describe('<FormComponent/>', () => {
    describe('<MessageInput/>', () => {
        it('should not allow enter to be pressed within the textarea', () => {
            const renderedModule = shallow(<Form.MessageInput/>);
            const preventedDefault = jest.fn();
            renderedModule.find('textarea').simulate('keyPress', {charCode: 13, preventDefault: preventedDefault});
            expect(preventedDefault).toHaveBeenCalled();
        })
        it('should allow other keys to be pressed within the textarea', () => {
            const renderedModule = shallow(<Form.MessageInput/>);
            const preventedDefault = jest.fn();
            renderedModule.find('textarea').simulate('keyPress', {charCode: 65, preventDefault: preventedDefault});
            expect(preventedDefault).not.toHaveBeenCalled();
        })
    })
})