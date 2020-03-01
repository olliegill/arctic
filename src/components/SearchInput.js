import React from 'react';
import PropTypes from 'prop-types';
import './searchInput.scss';

const SearchInput = ({ onChange }) => {
    return (
        <input
            autoFocus={true}
            className="searchInput"
            onChange={onChange}
            placeholder="Search by repository name"
        />
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func
};

export default SearchInput;
