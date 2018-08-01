import React, { Component } from 'react';

import './styles.scss';

class TextWithLeftIcon extends Component {
    render() {
        return (
            <div className="text-with-left-icon">
                <img className="icon" src={this.props.icon} alt={this.props.text} />
                <span className="text">{this.props.text}</span>
            </div>
        );
    }
}

export default TextWithLeftIcon;