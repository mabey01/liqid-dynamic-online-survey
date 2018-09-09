import React from 'react';

import { css } from 'emotion';

import { ProvideAllQuestion } from 'survey';
import { List, Colors, Link } from 'ui';

const headerStyle = css`
    padding: 5px 0;

    & > * {
        margin: 0 10px 0 0;
    }
`;

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
            <header className={headerStyle}>
                <Link to="/">Home</Link>
                <Link to="/startOver">Start over</Link>
            </header>

            <ProvideAllQuestion>
                {({ questions }) => (
                    <List>
                        {questions.map((question, index) => {
                            return (
                                <li key={question.question}>
                                    <div className={questionStyle}>
                                        <Link to={`question/${index}`}>
                                            {question.question}
                                        </Link>
                                    </div>
                                    <div className={answerStyle}>
                                        {question.answer}
                                    </div>
                                </li>
                            );
                        })}
                    </List>
                )}
            </ProvideAllQuestion>
        </div>
    );
}
