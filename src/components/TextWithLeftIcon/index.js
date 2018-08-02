import React, { Component } from 'react';

import styles from './styles.scss';

class TextWithLeftIcon extends Component {
    render() {
        return (
            <div className={styles.textWithLeftIcon}>
                <img className={styles.icon} src={this.props.icon} alt={this.props.text} />
                <span className={styles.text}>{this.props.text}</span>
            </div>
        );
    }
}

export default TextWithLeftIcon;