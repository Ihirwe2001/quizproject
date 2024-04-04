
import React from 'react';

const Question = ({ question, options, onSelect }) => {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => onSelect(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
