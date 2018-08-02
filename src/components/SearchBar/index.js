import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';

import styles from './styles.scss';

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
        e.preventDefault();
        this.props.history.push(`/users/${this.state.query}`);
    }
    handleEnterKeyUp(e) {
        if (e.key === 'Enter') {
            this.props.history.push(`/users/${this.state.query}`);
        }
    }
}

export default withRouter(SearchBar);