import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';

import styles from './styles.scss';
import { EventEmitter } from 'eventemitter3';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
    }

    render() {
        return (
            <div className={styles.searchBar}>
                <SearchInput handleChange={this.handleInputChange} handleEnterKeyUp={this.handleEnterKeyUp} value={this.state.query}/>
                <SearchButton handleSubmit={this.handleSubmit}/>
            </div>
        );
    }

    handleInputChange(e) {
        this.setState({query: e.target.value});
    }
    handleSubmit(e) {
        const { query } = this.state;

        e.preventDefault();
        if (this.state.query !== "") {
            this.props.history.push(`/users/${query}`);
            this.props.refreshSearch(query);
        }
    }
    handleEnterKeyUp(e) {
        const { query } = this.state;

        if (e.key === 'Enter' && query !== "") {
            this.props.history.push(`/users/${query}`);
            this.props.refreshSearch(query);
        }
    }
}

export default withRouter(SearchBar);