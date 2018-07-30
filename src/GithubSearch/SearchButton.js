import React, { Component } from 'react';
import searchIcon from '../assets/icons/search-icon.svg'
import { colors, boxShadow } from '../styles';

const searchButtonStyle = {
    width: "100%",
    height: "50px",
    backgroundColor: colors.purple,
    border: "0",
    padding: "0",
    borderRadius: "0 2px 2px 0",
    color: "white",
    boxShadow: boxShadow
}

class SearchButton extends Component {
    render() {
        return (
            <button className="SearchButton" style={searchButtonStyle}>
                <img src={searchIcon} alt="pesquisar usuário do Github"/>
            </button>
        );
    }
}

export default SearchButton;