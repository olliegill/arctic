import React from 'react';
import PropTypes from 'prop-types';
import './pageLayout.scss';

const PageLayout = ({ children }) => (
    <div className="pageLayout">
        <div className="pageLayout__header">
            <img
                className="pageLayout__headerImage"
                alt="arctic"
                src="https://www.arcticshores.com/wp-content/uploads/2019/09/Arctic-Shorers-Logo-White-Green-01.png" />
        </div>
        <div className="pageLayout__inner">
            {children}
        </div>
    </div>
);

PageLayout.propTypes = {
    children: PropTypes.node
};

export default PageLayout
