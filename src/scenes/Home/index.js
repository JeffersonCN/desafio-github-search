import React, { Component } from 'react';
import GithubSearchLogo from '../../components/GithubSearchLogo';
import SearchBar from "../../components/SearchBar";

import './styles.scss';

class Home extends Component {
    render() {
        return (
            <div className="home-scene">
                <main className="search-container">
                    <GithubSearchLogo />
                    <SearchBar />
                </main>
            </div>
        );
    }
}

export default Home;