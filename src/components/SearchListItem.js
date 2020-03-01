import React from 'react';
import PropTypes from 'prop-types';
import './searchListItem.scss';
import { Link } from "react-router-dom";

const SearchListItem = ({ data }) => (
    <li className="searchListItem">
        <Link className="searchListItem__inner" to={`/repository/${data.full_name}`}>
            <div className="searchListItem__left">
                <div className="searchListItem__item">
                    Repository Name: <strong>{data.name}</strong>
                </div>
                <div className="searchListItem__item">
                    User Name: <strong>{data.owner.login}</strong>
                </div>
            </div>
            <div className="searchListItem__right">
                <div className="searchListItem__item">
                    Stars: <strong>{data.stargazers_count}</strong>
                </div>
                <div className="searchListItem__item">
                    Watchers: <strong>{data.watchers_count}</strong>
                </div>
            </div>
        </Link>
    </li>
);

SearchListItem.propTypes = {
    data: PropTypes.object
}

export default SearchListItem;
