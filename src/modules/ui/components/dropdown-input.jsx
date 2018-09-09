import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

import ProvideValueState from '../smart-components/provide-value-state.jsx';
import { inputStyle } from './text-input.jsx';

const dropdownStyle = css`
    ${inputStyle} -webkit-appearance: none;

    &:hover {
        cursor: pointer;
    }
`;

export default function DropdownInput({
    defaultValue,
    options,
    onChange,
    ...props
}) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) => (
                <select
                    {...props}
                    value={value || ''}
                    className={dropdownStyle}
                    onChange={e => {
                        changeValue(e.target.value);
                        onChange(e);
                    }}
                >
                    <option value="">Select</option>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </ProvideValueState>
    );
}

DropdownInput.propTypes = {
    defaultValue: T.oneOfType([T.string, T.number]),
    options: T.arrayOf(T.oneOfType([T.string, T.number])).isRequired
};

DropdownInput.defaultProps = {
    defaultValue: null
};
