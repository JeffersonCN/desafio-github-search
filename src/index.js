import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Home from './GithubSearch/Home';

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
    ), document.getElementById('root')
);

registerServiceWorker();