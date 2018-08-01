import React, { Component } from 'react';
import TextWithLeftIcon from  '../TextWithLeftIcon';
import starIcon from '../../../../../../assets/icons/star-icon.svg';

import './styles.scss';

class RepositoryInfo extends Component {
    render() {
        return (
            <div className="repository-info">
                <p className="repository-name">{this.props.repository.name}</p>
                <p className="repository-description">{this.props.repository.description}</p>
                <TextWithLeftIcon icon={starIcon} text={this.props.repository.stargazers_count} />
            </div>
        );
    }
}

export default RepositoryInfo;