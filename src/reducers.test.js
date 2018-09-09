import Reducers from './reducers.js';

import ADD_ANSWER from './modules/survey/actions/add-answer.js';
import REMOVE_ALL_ANSWERS from './modules/survey/actions/remove-all-answers.js';

describe('reducers for all actions', () => {
    const fakeStore = {
        questions: [
            {
                question: 'Why?',
                answer: 'Dont know'
            },
            {
                question: 'How?',
                answer: 'Who knows'
            }
        ]
    };

    describe('ADD ANSWER reducer', () => {
        it('should add answer to a question by index and not alter other answers', () => {
            const answer = 'Because!';
            const newStore = Reducers(fakeStore, {
                type: ADD_ANSWER,
                questionIndex: 0,
                answer
            });

            expect(newStore.questions[0].answer).to.equal(answer);
            expect(newStore.questions[1].answer).to.equal(
                fakeStore.questions[1].answer
            );
        });

        it('should not add an answer if index is out of range', () => {
            const answer = 'Because!';
            const newStore = Reducers(fakeStore, {
                type: ADD_ANSWER,
                questionIndex: 10,
                answer
            });

            expect(newStore.questions[10]).to.be.undefined;
        });

        it('should add empty answers as well', () => {
            const newStore = Reducers(fakeStore, {
                type: ADD_ANSWER,
                questionIndex: 0,
                answer: null
            });

            expect(newStore.questions[0].answer).to.equal(null);
        });
    });

    describe('REMOVE ALL ANSWERS reducer', () => {
        it('should remove all answers from questions state', () => {
            const newStore = Reducers(fakeStore, { type: REMOVE_ALL_ANSWERS });

            newStore.questions.forEach(question => {
                expect(question.answer).to.be.null;
            });
        });
    });
});
