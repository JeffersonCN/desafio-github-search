import React from 'react';
import { shallow } from 'enzyme';
import RepositoryList from './';

describe('Testing RepositoryList Component', () => {
    it('shoud render correctly', () => {
        const repos = [{
            name: "Repositório",
            description: "Descrição",
            stargazers_count: 10
        }]

        const wrapper = shallow(
            <RepositoryList repos={repos}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});