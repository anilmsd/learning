import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  }
  render() {
    if (this.state.error) {
      return (
        // <div>Something went wrong,  please try again </div>
        //or
        <ErrorPage error={this.state.error} /> //Design a error page and display
      );
    }
    return this.props.children;
  }
}

//functional Component

// import React, { useState, useEffect } from 'react';
// import ErrorPage from './ErrorPage';

// const ErrorBoundary = ({ children }) => {
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const handleError = (error) => {
//             setError(error);
//         };

//         const handleWindowError = (event) => {
//             handleError(event.error);
//         };

//         window.addEventListener('error', handleWindowError);

//         return () => {
//             window.removeEventListener('error', handleWindowError);
//         };
//     }, []);

//     if (error) {
//         return <ErrorPage error={error} />;
//     }

//     return children;
// };

// export default ErrorBoundary;
