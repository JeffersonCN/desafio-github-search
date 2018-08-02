import React, { Component } from 'react';

import styles from './styles.scss';

class GithubSearchLogo extends Component {
    render() {
        return (
            <div className={styles.githubSearchLogo} >
                <span className={styles.githubText} >Github</span>
                <span className={styles.searchText} > Search</span>
            </div>
        );
    }
}

export default GithubSearchLogo;