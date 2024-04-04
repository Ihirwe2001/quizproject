
import React, { useState } from 'react';
import Question from './Question';
import questionsData from '../data/questions';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerSelected = (selectedOption) => {
        if (selectedOption === questionsData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <h2 className='text-bold'>Your Score: {score}</h2>
                </div>
            ) : (
                <div >
                    <Question
                        question={questionsData[currentQuestion].question}
                        options={questionsData[currentQuestion].options}
                        onSelect={handleAnswerSelected}
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;
