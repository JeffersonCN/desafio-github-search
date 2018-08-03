import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './';

describe('Testing UserProfile Component', () => {
    it('shoud render correctly', () => {
        const user = {
            avatar_url: "https://api.adorable.io/avatars/285/abott@adorable.png",
            name: "Jefferson Nascimento",
            login: "jeffersoncn",
            company: "Concrete Solutions",
            location: "Praia Grande, Brazil",
            public_repos: 30,
            followers: 10
        }

        const wrapper = shallow(
            <UserProfile user={user} stars={10}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});