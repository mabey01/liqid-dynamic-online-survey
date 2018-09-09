import React from 'react';
import T from 'prop-types';

import ProvideValueState from '../smart-components/provide-value-state.jsx';
import { inputStyle } from './text-input.jsx';

export default function NumberInput({ defaultValue, onChange, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) => {
                return (
                    <input
                        {...props}
                        type="number"
                        value={value || 0}
                        className={inputStyle}
                        onChange={e => {
                            console.log(e.target.value);
                            changeValue(e.target.value);
                            onChange(e);
                        }}
                    />
                );
            }}
        </ProvideValueState>
    );
}

NumberInput.propTypes = {
    defaultValue: T.oneOfType([T.string, T.number])
};

NumberInput.defaultProps = {
    defaultValue: null
};
