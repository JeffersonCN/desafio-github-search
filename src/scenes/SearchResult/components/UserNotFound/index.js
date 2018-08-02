import React, { Component } from 'react';

import styles from './styles.scss';

class UserNotFound extends Component {
    render() {
        return (
            <div className={styles.notFoundWrapper}>
                <span className={styles.notFoundMessage}>User not found :(</span>
            </div>
        );
    }
}

export default UserNotFound;