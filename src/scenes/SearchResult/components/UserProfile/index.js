import React, { Component } from 'react';
import TextWithLeftIcon from '../TextWithLeftIcon';
import { colors, boxShadow } from '../../styles';

import organizationIcon from '../../assets/icons/organization-icon.svg';
import locationIcon from '../../assets/icons/location-icon.svg';
import starIcon from '../../assets/icons/star-icon.svg';
import repositoriesIcon from '../../assets/icons/repositories-icon.svg';
import followersIcon from '../../assets/icons/followers-icon.svg';

const style = {
    container: {
        fontFamily: "Raleway",
        fontWeight: 300,
        padding: "5px"
    },
    avatar: {
        maxWidth: "280px",
        borderRadius: "2px",
        boxShadow: boxShadow
    },
    nameHeader: {
        fontSize: "35px",
        maxWidth: "280px",
        margin: "10px 0 0",
        lineHeight: "35px"
    },
    loginSubheading: {
        fontSize: "20px",
        color: colors.gray,
        margin: "10px 0 25px"
    }
}

const user = {
    "login": "JeffersonCN",
    "id": 8918576,
    "node_id": "MDQ6VXNlcjg5MTg1NzY=",
    "avatar_url": "https://avatars1.githubusercontent.com/u/8918576?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JeffersonCN",
    "html_url": "https://github.com/JeffersonCN",
    "followers_url": "https://api.github.com/users/JeffersonCN/followers",
    "following_url": "https://api.github.com/users/JeffersonCN/following{/other_user}",
    "gists_url": "https://api.github.com/users/JeffersonCN/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JeffersonCN/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JeffersonCN/subscriptions",
    "organizations_url": "https://api.github.com/users/JeffersonCN/orgs",
    "repos_url": "https://api.github.com/users/JeffersonCN/repos",
    "events_url": "https://api.github.com/users/JeffersonCN/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JeffersonCN/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jefferson Nascimento",
    "company": "FATEC",
    "blog": "http://jeffersoncruz.com",
    "location": "Praia Grande, SP - Brazil",
    "email": null,
    "hireable": true,
    "bio": "Full-time Coding Student passionated for technology.",
    "public_repos": 23,
    "public_gists": 5,
    "followers": 17,
    "following": 32,
    "created_at": "2014-09-25T17:36:40Z",
    "updated_at": "2018-07-26T22:37:07Z"
}

class UserProfile extends Component {
    render() {
        return (
            <div className="UserProfile" style={style.container} >
                {/* Avatar */}
                <img src={user.avatar_url} alt="avatar do usuário no Github" style={style.avatar} />
                {/* Name */}
                <p style={style.nameHeader}>{user.name}</p>
                {/* Login */}
                <p style={style.loginSubheading}>{user.login}</p>

                <TextWithLeftIcon icon={organizationIcon}   text={user.company} />
                <TextWithLeftIcon icon={locationIcon}       text={user.location} />
                <TextWithLeftIcon icon={starIcon}           text={10} />
                <TextWithLeftIcon icon={repositoriesIcon}    text={user.public_repos} />
                <TextWithLeftIcon icon={followersIcon}      text={user.followers} />
            </div>
        );
    }
}

export default UserProfile;