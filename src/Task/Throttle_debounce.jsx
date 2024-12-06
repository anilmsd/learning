import React, { useEffect, useState } from 'react';
import { throttle, debounce } from 'lodash';

const Throttle_debounce = () => {
    // Define the throttled function , it will execute atmost once in specified time in this respective event trigger happened 
    const handleScroll = throttle(() => {
        console.log('Scroll event triggered!');
    }, 2000); // Executes at most once every 200 milliseconds

    //   useEffect(()=>{
    //     setInterval(()=>{
    //         console.log("setInterval") //for every 0.5 seconds this one will console, even without any event triggers
    //     },500)
    //   },[])

    useEffect(() => {
        // Add the event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Cleanup to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [inputValue, setInputValue] = useState('');

    // The function to be called after the debounce delay
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log('Input value:', event.target.value);
    };

    // Create a debounced version of handleChange
    const debouncedHandleChange = debounce(handleChange, 3000);
    /*As the user types in the input field, the onChange event fires continuously.
    Each time onChange is triggered, the debouncedHandleChange clears the existing setTimeout and sets a new one.
    The function (handleChange) is only executed after the user stops typing for 300 milliseconds, preventing it from being called too frequently and improving performance.
  */
    return (
        <div style={{ height: '2000px' }}>
            <h1>Scroll down to see throttled event logging!</h1>
            <input type='text' onChange={debouncedHandleChange} />
        </div>
    );
};

export default Throttle_debounce;
