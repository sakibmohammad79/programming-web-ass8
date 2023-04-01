import React from 'react';

const Question = () => {
    return (
        <div className='text-center'>
            <h3>Question 1: React State vs Props explained.</h3>
            <p>Props: React is a component-based library that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.<br></br>
            State: React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
            <h3>Question 2: How does useEffect() work?</h3>
            <p>useEffect hook is the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.</p>
            <h3>Question 3: Purpose of useEffect other than fetching data.</h3>
            <p>
            When fetching data in a React component, useEffect is commonly used to perform the asynchronous fetch operation and update the component's state with the fetched data. Here are a few reasons why useEffect is useful in this context:Fetching data asynchronously: In modern web applications, it's common for components to fetch data asynchronously from a backend API. useEffect can be used to trigger the fetch operation when the component mounts or when certain props or state values change. </p>
            <h3>Question 4: How Does React work?</h3>
            <p>React is a JavaScript library for building user interfaces. It follows the declarative programming paradigm, where the developer specifies what the UI should look like and how it should behave, and React takes care of updating the UI when data changes.React uses a virtual DOM (Document Object Model) to manage the UI updates. The virtual DOM is a lightweight representation of the actual DOM, which allows React to perform updates efficiently. When a component's state or props change, React creates a new virtual DOM tree, compares it with the previous virtual DOM tree, and computes the minimum set of changes needed to update the actual DOM. This process is known as reconciliation</p>
        </div>
    );
};

export default Question;