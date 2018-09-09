import React from 'react';

import { Button } from 'ui';

export default class Form extends React.PureComponent {
    state = {
        isSubmitDisabled: true
    };

    toggleSubmit = enable => () => {
        this.setState({ isSubmitDisabled: !enable });
    };

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();

        const value = this.form[0].value;
        this.form.reset();
        this.props.onNext(value);
    }

    render() {
        const { isSubmitDisabled } = this.state;
        const { onNext, onBack, children } = this.props;

        return (
            <form ref={form => (this.form = form)}>
                {children({
                    enableSubmit: this.toggleSubmit(true),
                    disableSubmit: this.toggleSubmit(false)
                })}
                <div>
                    <Button onClick={onBack}>Back</Button>
                    <Button
                        type="submit"
                        disabled={isSubmitDisabled}
                        onClick={::this.handleSubmit}
                    >
                        Next
                    </Button>
                </div>
            </form>
        );
    }
}
