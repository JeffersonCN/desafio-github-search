import React, { Component } from 'react';
import TextWithLeftIcon from  '../../../../../../components/TextWithLeftIcon';
import starIcon from '../../../../assets/icons/star-icon.svg';

import styles from './styles.scss';

class RepositoryInfo extends Component {
    render() {
        return (
            <div className={styles.repositoryInfo}>
                <p className={styles.repositoryName}>{this.props.repository.name}</p>
                <p className={styles.repositoryDescription}>{this.props.repository.description}</p>
                <TextWithLeftIcon icon={starIcon} text={this.props.repository.stargazers_count} />
            </div>
        );
    }
}

export default RepositoryInfo;