import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home';
import SearchResult from './scenes/SearchResult';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users/:login" component={SearchResult} />
                </Switch>
            </Router>
        );
    }
}

export default App;