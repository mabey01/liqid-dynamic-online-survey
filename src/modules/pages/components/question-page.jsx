import React from 'react';

import { ProgressBar } from 'ui';
import {
    Question,
    Answer,
    Form,
    ProvideAllQuestion,
    ProvideDispatchAddAnswer
} from 'survey';

export default function QuestionPage({ match, history }) {
    const index = parseInt(match.params.index);
    return (
        <ProvideAllQuestion>
            {({ questions }) => (
                <div>
                    <header>
                        <ProgressBar max={questions.length} value={index} />
                    </header>
                    <ProvideDispatchAddAnswer>
                        {({ addAnswer }) => (
                            <Form
                                onBack={history.goBack}
                                onNext={answer => {
                                    addAnswer(index, answer);
                                    if (index + 1 === questions.length) {
                                        return history.push(`/results`);
                                    }

                                    history.push(`/question/${index + 1}`);
                                }}
                            >
                                {({ enableSubmit, disableSubmit }) => {
                                    return [
                                        <Question
                                            key="question"
                                            {...questions[index]}
                                        />,
                                        <Answer
                                            key="answer"
                                            {...questions[index]}
                                            onAnswerValid={enableSubmit}
                                            onAnswerInvalid={disableSubmit}
                                        />
                                    ];
                                }}
                            </Form>
                        )}
                    </ProvideDispatchAddAnswer>
                </div>
            )}
        </ProvideAllQuestion>
    );
}
