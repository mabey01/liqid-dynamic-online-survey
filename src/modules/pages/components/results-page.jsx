import React from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion';

import { ProvideAllQuestion } from 'survey';
import { Table, Colors } from 'ui';

const questionStyle = css`
    &:before {
        content: '';
        color: ${Colors.lightGrey};
    }

    color: ${Colors.darkGrey};
`;

const answerStyle = css`
    &:before {
        content: '';
        color: ${Colors.lightGrey};
    }

    color: ${Colors.darkGrey};

    font-size: 2em;
`;

export default function ResultsPage() {
    return (
        <div>
            <Link to="/startOver">START OVER</Link>
            <ProvideAllQuestion>
                {({ questions }) => (
                    <Table>
                        {questions.map(question => {
                            return (
                                <li key={question.question}>
                                    <div className={questionStyle}>
                                        {question.question}
                                    </div>
                                    <div className={answerStyle}>
                                        {question.answer}
                                    </div>
                                </li>
                            );
                        })}
                    </Table>
                )}
            </ProvideAllQuestion>
        </div>
    );
}
