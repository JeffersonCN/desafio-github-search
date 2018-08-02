import React, { Component } from 'react';
import TextWithLeftIcon from '../../../../components/TextWithLeftIcon';

import styles from './styles.scss';

import organizationIcon from './assets/icons/organization-icon.svg';
import locationIcon from './assets/icons/location-icon.svg';
import starIcon from '../../assets/icons/star-icon.svg';
import repositoriesIcon from './assets/icons/repositories-icon.svg';
import followersIcon from './assets/icons/followers-icon.svg';

class UserProfile extends Component {
    render() {
        return (
            <aside className={styles.userProfile} >
                <img src={this.props.user.avatar_url} className={styles.avatar} alt="avatar do usuário no Github" />
                <p className={styles.nameHeading}>{this.props.user.name}</p>
                <p className={styles.loginSubheading}>{this.props.user.login}</p>

                { this.props.user.company == null ? "" : <TextWithLeftIcon icon={organizationIcon}   text={this.props.user.company} />}
                { this.props.user.location == null ? "" : <TextWithLeftIcon icon={locationIcon}       text={this.props.user.location} /> }
                <TextWithLeftIcon icon={starIcon}           text={this.props.stars} />
                <TextWithLeftIcon icon={repositoriesIcon}   text={this.props.user.public_repos} />
                <TextWithLeftIcon icon={followersIcon}      text={this.props.user.followers} />
            </aside>
        );
    }
}

export default UserProfile;