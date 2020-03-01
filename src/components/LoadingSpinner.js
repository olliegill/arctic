import React from 'react';
import './loadingSpinner.scss';

const LoadingSpinner = () => (
    <div className="loadingSpinner">
        <div className="loadingSpinner__track" />
        <div className="loadingSpinner__handle" />
    </div>
);

export default LoadingSpinner;
