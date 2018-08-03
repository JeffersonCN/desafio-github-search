import React from 'react';
import { shallow } from 'enzyme';
import RepositoryInfo from './';

describe('Testing RepositoryInfo Component', () => {
    it('shoud render correctly', () => {
        const repo = {
            name: "Repositório",
            description: "Descrição",
            stargazers_count: 10
        }

        const wrapper = shallow(
            <RepositoryInfo repository={repo}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});