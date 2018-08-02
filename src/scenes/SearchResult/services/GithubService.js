import config from '../config';

const headers = new Headers({'Authorization': `token ${config.github_access_token}`});

export default {
    getUser(login) {
        return fetch(`https://api.github.com/users/${login}`, {headers: headers})
            .then(response => response.json());

    },
    getRepos(login) {
        return fetch(`https://api.github.com/users/${login}/repos`, {headers: headers})
            .then(response => response.json());
    },
    totalStargazersCount(repositories) {
        return repositories.reduce((currStarCount, nextRepo) => currStarCount + parseInt(nextRepo.stargazers_count, 10), 0);
    }
};