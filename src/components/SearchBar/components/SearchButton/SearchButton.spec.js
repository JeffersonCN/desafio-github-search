import React from 'react';
import { shallow } from 'enzyme';
import SearchButton from './';

describe('Testing SearchButton Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <SearchButton />
        );

        expect(wrapper).toMatchSnapshot();
    });
});