import React from 'react';
import PropTypes from 'prop-types';
import './searchListItem.scss';
import { Link } from "react-router-dom";

class SearchListItem extends React.Component {

    render() {
        const data = this.props.data;
        return (
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
    }
}

SearchListItem.propTypes = {
    data: PropTypes.object
}

export default SearchListItem;
// The results list should contain the repo name, the author’s name, the repo image, number of
// stars & watchers. The list should be sorted by the number of stars. When the user clicks on a
// result item, they should be taken to a new page where you display more info about the
// repository and author (like when was it last updated, which programming language is used, the
// author’s avatar etc.)
