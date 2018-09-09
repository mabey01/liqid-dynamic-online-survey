import React from 'react';
import { Link } from 'react-router-dom';

import { ProvideAllQuestion, ProvideDispatchRemoveAllAnswers } from 'survey';
import { Table } from 'ui';

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
                                    <div>Q: {question.question}</div>
                                    <div>A: {question.answer}</div>
                                </li>
                            );
                        })}
                    </Table>
                )}
            </ProvideAllQuestion>
        </div>
    );
}
