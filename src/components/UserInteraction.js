import React from 'react';
import PropTypes from 'prop-types';
import './userInteraction.scss';

const UserInteraction = ({ name, image, value }) => (
    <div className="userInteraction">
        <div className="userInteraction__image">
            {name} <div className="userInteraction__imageInner">{image}</div>
        </div>
        <div className="userInteraction__value">
            {value}
        </div>
    </div>
);

UserInteraction.propTypes = {
    name: PropTypes.string,
    image: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default UserInteraction;
