import React from 'react';
import { shallow } from 'enzyme';
import TextWithLeftIcon from './';

describe('Testing TextWithLeftIcon Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <TextWithLeftIcon />
        );

        expect(wrapper).toMatchSnapshot();
    });
});