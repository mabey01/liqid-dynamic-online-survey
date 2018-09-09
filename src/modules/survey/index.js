module.exports.Question = require('./components/question.jsx').default;
module.exports.Answer = require('./components/answer.jsx').default;
module.exports.Form = require('./components/form.jsx').default;

module.exports.ADD_ANSWER = require('./actions/add-answer.js').ADD_ANSWER;
module.exports.REMOVE_ALL_ANSWERS = require('./actions/remove-all-answers.js').REMOVE_ALL_ANSWERS;

module.exports.ProvideAllQuestion = require('./smart-components/provide-all-questions.jsx').default;
module.exports.ProvideDispatchAddAnswer = require('./smart-components/provide-dispatch-add-answer.jsx').default;
module.exports.ProvideDispatchRemoveAllAnswers = require('./smart-components/provide-dispatch-remove-all-answers.jsx').default;
