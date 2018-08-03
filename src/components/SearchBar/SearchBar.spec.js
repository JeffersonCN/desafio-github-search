import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './';

describe('Testing SearchBar Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <SearchBar />
        );

        expect(wrapper).toMatchSnapshot();
    });
});