import React, { Component } from 'react';
import { colors, boxShadow } from '../styles';

const searchInputStyle = {
    width: "100%",
    height: "50px",
    boxSizing: "border-box",
    border: "1px solid #D8D8D8",
    borderRadius: "2px 0 0 2px",
    boxShadow: boxShadow,
    color: colors.gray,
    backgroundColor: colors.white,
    float: "left",
    paddingLeft: "17px",
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: "300",
}

class SearchInput extends Component {
    render() {
        return (
            <input type="text" className="SearchInput" style={searchInputStyle}/>
        );
    }
}

export default SearchInput;