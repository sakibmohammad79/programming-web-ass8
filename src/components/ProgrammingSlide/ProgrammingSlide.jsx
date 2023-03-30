import React from 'react';

const ProgrammingSlide = (props) => {
    const {name, id, title, time, date} = props.data;
    return (
        <div>
            <p>name: {name}</p>
        </div>
    );
};

export default ProgrammingSlide;