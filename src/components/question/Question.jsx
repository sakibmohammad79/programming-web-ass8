import React from 'react';

const Question = () => {
    return (
        <div className='text-center bg-dark p-3 text-white'>
            <h3>Question 1: React State vs Props explained.</h3>
            <p>Props: React is a component-based library that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.<br></br>
            State: React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
            <h3>Question 2: How does useState work?</h3>
            <p>useState is a built-in hook in React that allows you to add state to functional components. It takes an initial value as a parameter and returns an array with two elements: The current state value.A function to update the state value.we can use the state value in your component's JSX to render dynamic content. When the state is updated using the function returned by useState, React will re-render the component with the new state value. This allows you to create interactive and dynamic user interfaces.</p>
            <h3>Question 3: Purpose of useEffect other than fetching data.</h3>
            <p>
            Updating the document title: You can use useEffect to update the document title based on the current state or props of the component. This is useful for creating dynamic page titles.Event listeners: You can use useEffect to add event listeners to the document or window, and clean them up when the component is unmounted. This is useful for handling keyboard events or other user interactions.Animations: You can use useEffect to create animations by updating the style or position of elements in the DOM based on the current state or props of the component.</p>
            <h3>Question 4: How Does React work?</h3>
            <p>React is a JavaScript library for building user interfaces. It follows the declarative programming paradigm, where the developer specifies what the UI should look like and how it should behave, and React takes care of updating the UI when data changes.React uses a virtual DOM (Document Object Model) to manage the UI updates. The virtual DOM is a lightweight representation of the actual DOM, which allows React to perform updates efficiently. When a component's state or props change, React creates a new virtual DOM tree, compares it with the previous virtual DOM tree, and computes the minimum set of changes needed to update the actual DOM. This process is known as reconciliation</p>
        </div>
    );
};

export default Question;