import React from 'react';
import T from 'prop-types';

import { NumberInput, TextInput, DropdownInput, RadioInput } from 'ui';

export default function Answer({
    answerType,
    answer,
    options,
    inputFieldName,
    onAnswerValid,
    onAnswerInvalid
}) {
    const onChange = e =>
        e.target.checkValidity() ? onAnswerValid() : onAnswerInvalid();

    if (answerType === 'dropdown' || answerType === 'radio') {
        let MultipleOptionsInputComponent = DropdownInput;

        if (answerType === 'radio') {
            MultipleOptionsInputComponent = RadioInput;
        }

        return (
            <MultipleOptionsInputComponent
                defaultValue={answer}
                options={options}
                onChange={onChange}
                name={inputFieldName}
                required
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
            onChange={onChange}
        />
    );
}

Answer.propTypes = {
    answerType: T.string.isRequired,
    onAnswerValid: T.func.isRequired,
    onAnswerInvalid: T.func.isRequired,

    answer: T.oneOfType([T.string, T.number]),
    options: T.arrayOf(T.oneOfType([T.string, T.number])),
    inputFieldName: T.string
};

Answer.defaultProps = {
    answer: null,
    options: [],
    inputFieldName: 'answer'
};
