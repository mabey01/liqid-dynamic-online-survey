import React from 'react';

import { NumberInput, TextInput } from 'ui';

export default function Answer({
    answerType,
    options,
    answer,
    onAnswerValid,
    onAnswerInvalid
}) {
    if (answerType === 'radio') {
        return (
            <div>
                {options.map(option => {
                    return (
                        <div key={option}>
                            <input
                                type="radio"
                                id={option}
                                name="answer"
                                value={option}
                                defaultChecked={answer}
                                onChange={e =>
                                    e.target.checkValidity()
                                        ? onAnswerValid()
                                        : onAnswerInvalid()
                                }
                                required
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    );
                })}
            </div>
        );
    }

    if (answerType === 'dropdown') {
        return (
            <select
                name="answer"
                defaultValue={answer}
                onChange={e =>
                    e.target.checkValidity()
                        ? onAnswerValid()
                        : onAnswerInvalid()
                }
                required
            >
                <option value="">Select</option>
                {options.map(option => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
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
            defaultValue={answer}
            onChange={e =>
                e.target.checkValidity() ? onAnswerValid() : onAnswerInvalid()
            }
        />
    );
}
