export const ADD_ANSWER = 'ADD_ANSWER';

export default function addAnswer(questionIndex, answer) {
    return {
        type: ADD_ANSWER,
        questionIndex,
        answer
    };
}
