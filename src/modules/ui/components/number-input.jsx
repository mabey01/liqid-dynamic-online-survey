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
                        value={value || ''}
                        className={inputStyle}
                        onChange={e => {
                            const value = e.target.value || '';

                            if (value) {
                                changeValue(parseInt(value));
                            } else {
                                changeValue(value);
                            }

                            console.log(value);

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
