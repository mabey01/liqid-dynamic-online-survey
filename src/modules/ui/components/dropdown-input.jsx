import React from 'react';

import ProvideValueState from '../smart-components/provide-value-state.jsx';

export default function DropdownInput({ defaultValue, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value, changeValue }) => (
                <select {...props} value={value}>
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
