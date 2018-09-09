import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

import ProvideValueState from '../smart-components/provide-value-state.jsx';

const radioStyle = css`
    font-size: 2em;

    display: flex;
    align-items: center;
`;

export default function RadioInput({
    defaultValue,
    options,
    onChange,
    ...props
}) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) =>
                options.map(option => {
                    return (
                        <div key={option} className={radioStyle}>
                            <input
                                {...props}
                                type="radio"
                                id={option}
                                name="answer"
                                value={option}
                                checked={option === value}
                                onChange={e => {
                                    console.log(e);
                                    console.log(e.target.value);
                                    changeValue(e.target.value);
                                    onChange(e);
                                }}
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    );
                })
            }
        </ProvideValueState>
    );
}

RadioInput.propTypes = {
    defaultValue: T.oneOfType([T.string, T.number]),
    options: T.arrayOf(T.oneOfType([T.string, T.number])).isRequired
};

RadioInput.defaultProps = {
    defaultValue: null
};
