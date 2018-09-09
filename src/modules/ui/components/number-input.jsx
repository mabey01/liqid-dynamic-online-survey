import React from 'react';

import ProvideValueState from '../smart-components/provide-value-state.jsx';

export default function NumberInput({ defaultValue, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value }) => {
                return <input {...props} type="number" value={value} />;
            }}
        </ProvideValueState>
    );
}
