import React from 'react';
import PropTypes from 'prop-types';
import './searchPage.scss';
import { inject, observer } from "mobx-react";

import SearchList from '../components/SearchList';
import SearchListItem from '../components/SearchListItem';
import PageLayout from '../components/PageLayout';
import SearchInput from '../components/SearchInput';

class SearchPage extends React.Component {

    handleSearch = (event) => {
        this.props.appStore.handleSearch(event.currentTarget.value);
    }

    componentWillUnmount() {
        this.props.appStore.removeSearchData();
    }

    render() {
        return (
            <PageLayout>
                <div className="searchPage">
                    <div className="searchPage__input">
                        <SearchInput onChange={this.handleSearch} />
                    </div>
                    <SearchList isLoading={this.props.appStore.isSearchResultsLoading}>
                        {this.props.appStore.searchResults.map((result, i) => (
                            <SearchListItem key={i} data={result} />
                        ))}
                    </SearchList>
                </div>
            </PageLayout>
        );
    }
}

SearchPage.propTypes = {
    appStore: PropTypes.object
}

export default inject(['appStore'])(observer(SearchPage));
