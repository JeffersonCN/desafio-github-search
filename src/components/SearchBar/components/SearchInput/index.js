import React, { Component } from 'react';

import styles from './styles.scss';

class SearchInput extends Component {
    render() {
        return (
            <input type="text" className={styles.searchInput} onChange={this.props.handleChange} onKeyUp={this.props.handleEnterKeyUp} />
        );
    }
}

export default SearchInput;