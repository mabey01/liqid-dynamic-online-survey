import React from 'react';

import ProvideValueState from '../smart-components/provide-value-state.jsx';

export default function TextInput({ defaultValue, ...props }) {
    return (
        <ProvideValueState defaultValue={defaultValue}>
            {({ value }) => {
                return <input {...props} type="text" value={value} />;
            }}
        </ProvideValueState>
    );
}
