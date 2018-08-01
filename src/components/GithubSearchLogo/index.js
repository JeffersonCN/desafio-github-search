import React, { Component } from 'react';

import './styles.scss';

class GithubSearchLogo extends Component {
    render() {
        return (
            <div className="github-search-logo" >
                <span className="github-text" >Github</span>
                <span className="search-text" > Search</span>
            </div>
        );
    }
}

export default GithubSearchLogo;