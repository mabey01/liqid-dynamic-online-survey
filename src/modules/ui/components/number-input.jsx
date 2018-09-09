import React from 'react';
import T from 'prop-types';

import ProvideValueState from '../smart-components/provide-value-state.jsx';
import inputStyle from './input.style.js';

export default function NumberInput({ defaultValue, onChange, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) => {
                return (
                    <input
                        {...props}
                        type="number"
                        value={value || ''}
                        className={inputStyle}
                        onChange={e => {
                            const value = e.target.value || '';

                            if (value) {
                                changeValue(parseInt(value));
                            } else {
                                changeValue(value);
                            }

                            onChange && onChange(e);
                        }}
                    />
                );
            }}
        </ProvideValueState>
    );
}

NumberInput.propTypes = {
    defaultValue: T.string,
    onChange: T.func
};

NumberInput.defaultProps = {
    defaultValue: null
};
