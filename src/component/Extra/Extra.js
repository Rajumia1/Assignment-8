import React from 'react';

const Extra = () => {
    return (
        <div>
            <h4>There are some questions heer.</h4>
            <p><span>1.How does react work?</span>
                React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                It's possible to have as many components as necessary without cluttering your code.
            </p>
            <p><span>2.What are the deifference of props and useState?</span>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only
                and cannot be passed to other components.
            </p>

            <p><span>3.Whats the work of useEffect without api?</span>
                The useEffect Hook allows you to perform side effects in your components.

                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
            </p>
        </div>
    );
};

export default Extra;