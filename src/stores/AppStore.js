import { fetchData } from '../api/api';
import { observable, action, decorate } from 'mobx';

class AppStore {
    searchResults = [];
    repoData = {};
    isSearchResultsLoading;

    handleSearch = (query) => {
        this.isSearchResultsLoading = true;
        return new Promise((resolve, reject) => {
            fetchData(query)
                .then((response) => {
                    this.searchResults = response && response.data.items;
                    this.isSearchResultsLoading = false;
                    resolve(response);
                })
                .catch((e) => {
                    this.isSearchResultsLoading = false;
                    reject(e);
                });
        });
    }

    fetchDataByRepoName = (name, repo) => {
        this.isSearchResultsLoading = true;
        const query = `repo:${name}/${repo}`;
        return new Promise((resolve, reject) => {
            fetchData(query)
                .then((response) => {
                    this.repoData = response && response.data.items[0];
                    this.isSearchResultsLoading = false;
                    resolve(response);
                })
                .catch((e) => {
                    this.isSearchResultsLoading = false;
                    reject(e);
                });
        });
    }
}

export default decorate(AppStore, {
    handleSearch: action,
    fetchDataByRepoName: action,
    searchResults: observable,
    repoData: observable,
    isSearchResultsLoading: observable
});
