import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ResultsPage, HomePage, QuestionPage } from 'pages';
import { Typography } from 'ui';
import { loadFromStorage, writeToStorage } from 'storage';
import { ProvideDispatchRemoveAllAnswers } from 'survey';

import Reducer from './reducers.js';

import SurveyData from './questions.json';

const ANSWERS_KEY = 'answers';
const answers = loadFromStorage(ANSWERS_KEY);

const store = createStore(
    Reducer,
    {
        questions: SurveyData.map((question, index) => ({
            ...question,
            answer: answers ? answers[index] : null
        }))
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    writeToStorage(
        ANSWERS_KEY,
        store.getState().questions.map(question => question.answer)
    );
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Typography>
                <Route path="/" exact component={HomePage} />
                <Route path="/question/:index" component={QuestionPage} />
                <Route path="/results" component={ResultsPage} />

                <Route
                    path="/startOver"
                    exact
                    render={() => (
                        <ProvideDispatchRemoveAllAnswers>
                            {({ removeAllAnswers }) => {
                                removeAllAnswers();
                                return <Redirect to="/question/0" />;
                            }}
                        </ProvideDispatchRemoveAllAnswers>
                    )}
                />
            </Typography>
        </Router>
    </Provider>,
    document.getElementById('app')
);
