import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddAnswer from './modules/survey/actions/add-answer.js';
import Reducer from './reducers.js';

import SurveyData from './questions.json';

import {
    Question,
    Answer,
    Form,
    ProvideCurrentQuestion,
    ProvideAllQuestion
} from 'survey';

const store = createStore(
    Reducer,
    { questions: SurveyData },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ComposedQuestion = ProvideCurrentQuestion(Question);
const ComposedAnswer = ProvideCurrentQuestion(Answer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route
                    path="/"
                    exact
                    render={() => <Link to="/question/0">Start</Link>}
                />
                <Route
                    path="/question/:index"
                    render={props => {
                        const index = parseInt(props.match.params.index);
                        console.log(index);
                        return (
                            <Form
                                onBack={props.history.goBack}
                                onNext={answer => {
                                    store.dispatch(AddAnswer(index, answer));
                                    if (index + 1 === SurveyData.length) {
                                        return props.history.push(`/results`);
                                    }

                                    props.history.push(
                                        `/question/${index + 1}`
                                    );
                                }}
                            >
                                {({ enableSubmit, disableSubmit }) => {
                                    return [
                                        <ComposedQuestion
                                            key="question"
                                            questionIndex={index}
                                        />,
                                        <ComposedAnswer
                                            key="answer"
                                            questionIndex={index}
                                            onAnswerValid={enableSubmit}
                                            onAnswerInvalid={disableSubmit}
                                        />
                                    ];
                                }}
                            </Form>
                        );
                    }}
                />

                <Route
                    path="/results"
                    render={() => {
                        return (
                            <div>
                                <Link to="/">START</Link>
                                <ProvideAllQuestion>
                                    {questions => {
                                        return questions.map(question => {
                                            return (
                                                <div>
                                                    <div>
                                                        {question.question}
                                                    </div>
                                                    <div>{question.answer}</div>
                                                </div>
                                            );
                                        });
                                    }}
                                </ProvideAllQuestion>
                            </div>
                        );
                    }}
                />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);
