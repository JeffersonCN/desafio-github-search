import React, { Component } from 'react';

import GithubSearchLogo from '../../components/GithubSearchLogo';
import SearchBar from "../../components/SearchBar";

import styles from './styles.scss';

class Home extends Component {
    render() {
        return (
            <div className={styles.homeScene}>
                <main className={styles.searchContainer}>
                    <GithubSearchLogo />
                    <SearchBar refreshSearch={console.log} />
                </main>
            </div>
        );
    }
}

export default Home;