import React from 'react';

const ErrorPage = ({ error }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Oops! Something went wrong...</h2>
            <p>We're sorry, but an error occurred:</p>
            <p>{error.message}</p>
            <p>Please try again later.</p>
        </div>
    );
};

export default ErrorPage;
