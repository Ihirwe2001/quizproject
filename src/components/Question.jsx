
import React from 'react';

const Question = ({ question, options, onSelect }) => {
    return (
        <div>
            <h2 className='ml-6 mt-4 text-xl font-bold'>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button className='ml-6 mt-4' onClick={() => onSelect(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
