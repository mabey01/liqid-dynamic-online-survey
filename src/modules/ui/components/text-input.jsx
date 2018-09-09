import React from 'react';
import T from 'prop-types';

import ProvideValueState from '../smart-components/provide-value-state.jsx';
import inputStyle from './input.style.js';

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
                            changeValue(e.target.value.trimStart());
                            onChange(e);
                        }}
                    />
                );
            }}
        </ProvideValueState>
    );
}

TextInput.propTypes = {
    defaultValue: T.string,
    onChange: T.func
};
