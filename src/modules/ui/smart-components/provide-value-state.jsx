import React from 'react';
import T from 'prop-types';

export default class ProvideValueState extends React.PureComponent {
    static propTypes = {
        defaultValue: T.oneOf([T.number, T.string])
    };

    state = {
        value: null
    };

    static getDerivedStateFromProps({ defaultValue }) {
        return {
            value: defaultValue
        };
    }

    handleValueChange(newValue) {
        this.setState({ value: newValue });
    }

    render() {
        const { value } = this.state;
        const { children } = this.props;

        return children({
            value,
            changeValue: ::this.handleValueChange
        });
    }
}
