import React, { Component } from 'react';
import GithubService from './services/GithubService';

import GithubSearchLogo from '../../components/GithubSearchLogo';
import SearchBar from '../../components/SearchBar';
import UserProfile from './components/UserProfile';
import RepositoriesList from './components/RepositoriesList';
import UserNotFound from './components/UserNotFound';

import styles from './styles.scss';

class SearchResult extends Component {
    constructor(props) {
        super(props);

        const { match: { params } } = props;

        this.state = {
            user: {},
            repos: [],
            stars: 0,
            noData: false,
            query: params.login
        }

        this.handleRefresh = this.handleRefresh.bind(this);
    }

    render() {
        const { user, repos, stars, noData, query } = this.state;
        const { searchResult, header, logoContainer, searchContainer, resultContent } = styles;

        return (
            <div className={searchResult}>
                <div className={header}>
                    <div className={logoContainer}>
                        <GithubSearchLogo />
                    </div>
                    <div className={searchContainer}>
                        <SearchBar query={query} refreshSearch={this.handleRefresh} />
                    </div>
                </div>
                {repos.length > 0 && <div className={resultContent}>
                    <UserProfile user={user} stars={stars} />
                    <RepositoriesList repos={repos} />
                </div>}
                {noData && <div className={resultContent}>
                    <UserNotFound />
                </div>}
            </div>
        );
    }

    componentWillMount() {
        const { match: { params } } = this.props;

        this.fetchData(params.login);
    }

    fetchData(newQuery) {
        GithubService.getUser(newQuery)
            .then(user => {
                if (user.message != null) {
                    this.setState({ noData: true });
                    return;
                }

                this.setState({ user: user, noData: false });
            });

        GithubService.getRepos(newQuery)
            .then(repos => {
                if (repos.message != null) {
                    this.setState({ noData: true });
                    return;
                }

                this.setState({
                    repos: repos,
                    stars: GithubService.totalStargazersCount(repos),
                    noData: false
                });
            });
    }

    handleRefresh(newQuery) {
        this.fetchData(newQuery);
    }
}

export default SearchResult;