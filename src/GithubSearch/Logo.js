import React, { Component } from 'react';

const styleForLogo = {
    fontSize: "60px",
    color: "#000"
}

const styleForGithubText = {
    fontFamily: 'Monaco'
}

const styleForSearchText = {
    fontFamily: 'Raleway',
    fontWeight: 200,
    fontStyle: 'italic'
}

class Logo extends Component {
    render() {
        return (
            <div className="Logo" style={styleForLogo}>
                <span style={styleForGithubText}>Github</span>
                <span style={styleForSearchText}> Search</span>
            </div>
        );
    }
}

export default Logo;