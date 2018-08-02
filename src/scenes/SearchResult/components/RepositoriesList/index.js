import React, { Component } from 'react';
import RepositoryInfo from './components/RepositoryInfo';

import styles from './styles.scss';

class RepositoriesList extends Component {
    render() {
        return (
            <main className={styles.repositoriesList}>
                { this.props.repos.map((repo, index) => <RepositoryInfo repository={repo} key={index} />) }
            </main>
        );
    }
}

export default RepositoriesList;