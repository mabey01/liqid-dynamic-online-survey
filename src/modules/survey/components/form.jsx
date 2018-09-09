import React from 'react';

import { Button, Footer } from 'ui';

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

        const value = this.form['answer'].value;
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
                <Footer>
                    <Button onClick={onBack} size="regular">
                        Back
                    </Button>
                    <Button
                        type="submit"
                        disabled={isSubmitDisabled}
                        onClick={::this.handleSubmit}
                        size="regular"
                    >
                        Next
                    </Button>
                </Footer>
            </form>
        );
    }
}
