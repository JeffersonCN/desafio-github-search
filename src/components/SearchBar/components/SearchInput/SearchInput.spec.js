import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './';

describe('Testing SearchInput Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <SearchInput />
        );

        expect(wrapper).toMatchSnapshot();
    });
});