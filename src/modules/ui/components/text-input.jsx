import React from 'react';
import { css } from 'emotion';
import Colors from '../colors.js';

import ProvideValueState from '../smart-components/provide-value-state.jsx';

export const inputStyle = css`
    width: 100%;

    border-radius: 0;
    border: none;
    border-bottom: 1px solid ${Colors.darkGrey};

    font-size: 2em;
    font-weight: 100;

    padding: 20px 0 0 0;
    box-sizing: border-box;

    background: transparent;

    &:active,
    :focus {
        outline: none;
    }
    
    &::placeholder {
        color: ${Colors.lightGrey};
    }

    color: ${Colors.darkGrey};
`;

export default function TextInput({ defaultValue, onChange, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) => {
                return (
                    <input
                        {...props}
                        type="text"
                        value={value || ''}
                        className={inputStyle}
                        onChange={e => {
                            console.log(e.target.value);
                            changeValue(e.target.value.trimStart());
                            onChange(e);
                        }}
                    />
                );
            }}
        </ProvideValueState>
    );
}
