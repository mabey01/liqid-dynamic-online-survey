import React from 'react';
import T from 'prop-types';

export default class ProvideValueState extends React.PureComponent {
    static propTypes = {
        defaultValue: T.oneOfType([T.number, T.string]),
        onChange: T.func
    };

    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
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
