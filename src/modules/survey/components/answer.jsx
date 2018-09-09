import React from 'react';
import T from 'prop-types';

import { NumberInput, TextInput, DropdownInput, RadioInput } from 'ui';

export default class Answer extends React.PureComponent {
    static propTypes = {
        answerType: T.string.isRequired,
        onAnswerValid: T.func.isRequired,
        onAnswerInvalid: T.func.isRequired,

        answer: T.oneOfType([T.string, T.number]),
        placeholder: T.oneOfType([T.string, T.number]),
        options: T.arrayOf(T.oneOfType([T.string, T.number])),
        inputFieldName: T.string
    };

    static defaultProps = {
        answer: null,
        options: [],
        inputFieldName: 'answer'
    };

    componentDidMount() {
        this.checkValidity();
    }

    componentDidUpdate({ answer }) {
        if (answer !== this.props.answer) {
            this.checkValidity();
        }
    }

    checkValidity() {
        const { answer, onAnswerValid } = this.props;
        if (answer) {
            onAnswerValid();
        }
    }

    handleOnChange(e) {
        const { onAnswerValid, onAnswerInvalid } = this.props;
        e.target.checkValidity() ? onAnswerValid() : onAnswerInvalid();
    }

    render() {
        const {
            answerType,
            placeholder,
            answer,
            options,
            inputFieldName
        } = this.props;

        if (answerType === 'dropdown' || answerType === 'radio') {
            let MultipleOptionsInputComponent = DropdownInput;

            if (answerType === 'radio') {
                MultipleOptionsInputComponent = RadioInput;
            }

            return (
                <MultipleOptionsInputComponent
                    required
                    name={inputFieldName}
                    defaultValue={answer}
                    options={options}
                    onChange={::this.handleOnChange}
                />
            );
        }

        let InputComponent = TextInput;

        if (answerType === 'number') {
            InputComponent = NumberInput;
        }

        return (
            <InputComponent
                autoFocus
                required
                name={inputFieldName}
                defaultValue={answer}
                placeholder={placeholder}
                onChange={::this.handleOnChange}
            />
        );
    }
}
