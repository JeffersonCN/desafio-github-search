import React, { Component } from 'react';
import GithubSearchLogo from './Logo';
import SearchBar from "./SearchBar";

const stylesForHome = {
    maxWidth: "750px",
    textAlign: "center",
    margin: "0 auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
};

class Home extends Component {
    render() {
        return (
            <div className="Home" style={stylesForHome}>
                <div style={{ paddingBottom: "10rem" }}>
                    <GithubSearchLogo />
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default Home;