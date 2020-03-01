import React from 'react';
import PropTypes from 'prop-types';
import './pageLayout.scss';

const PageLayout = ({ children }) => (
    <div className="pageLayout">
        <div className="pageLayout__inner">
            {children}
        </div>
    </div>
);

PageLayout.propTypes = {
    children: PropTypes.node
};

export default PageLayout
