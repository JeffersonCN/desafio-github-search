import React from 'react';
import { shallow } from 'enzyme';
import UserNotFound from './';

describe('Testing UserNotFound Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <UserNotFound />
        );

        expect(wrapper).toMatchSnapshot();
    });
});