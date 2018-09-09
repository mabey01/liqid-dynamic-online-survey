import { ADD_ANSWER } from './modules/survey/actions/add-answer.js';
import { REMOVE_ALL_ANSWERS } from './modules/survey/actions/remove-all-answers.js';

export default function todoApp(state = {}, action) {
    if (action.type === ADD_ANSWER) {
        return {
            ...state,
            questions: state.questions.map((question, index) => {
                if (index === action.questionIndex) {
                    return {
                        ...question,
                        answer: action.answer
                    };
                }
                return question;
            })
        };
    }

    if (action.type === REMOVE_ALL_ANSWERS) {
        return {
            ...state,
            questions: state.questions.map(question => ({
                ...question,
                answer: null
            }))
        };
    }

    return state;
}
