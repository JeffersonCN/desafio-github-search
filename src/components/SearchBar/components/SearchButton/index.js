import React, { Component } from 'react';
import searchIcon from './assets/icons/search-icon.svg';

import './styles.scss';

class SearchButton extends Component {
    render() {
        return (
            <button className="search-button">
                <img src={searchIcon} alt="pesquisar usuário do Github"/>
            </button>
        );
    }
}

export default SearchButton;