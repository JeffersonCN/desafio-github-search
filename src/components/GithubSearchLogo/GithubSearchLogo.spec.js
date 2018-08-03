import React from 'react';
import { shallow } from 'enzyme';
import GithubSearchLogo from './';

describe('Testing GithubSearchLogo Component', () => {
    it('shoud render correctly', () => {
        const wrapper = shallow(
            <GithubSearchLogo />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
