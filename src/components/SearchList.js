import React from 'react';
import PropTypes from 'prop-types';
import './searchList.scss';
import LoadingSpinner from '../components/LoadingSpinner';

const SearchList = ({ children, isLoading }) => {

    if (isLoading) {
        return (
            <div className="searchList__loading">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="searchList">
            {children.length > 0 ? (
                <ul className="searchList__ul">
                    {children}
                </ul>
            ) : (
                <div>please search repositories</div>
            )}
        </div>
    );
}

SearchList.propTypes = {
    children: PropTypes.node,
    isLoading: PropTypes.bool
}

export default SearchList;
