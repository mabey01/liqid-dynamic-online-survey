import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

const buttonStyle = css`
    display: inline-block;

    padding: 10px 20px;
    background: grey;

    border: none;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        color: red;
    }
`;

export default function Button({ children, ...props }) {
    return (
        <button {...props} className={buttonStyle}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: T.string
};

Button.defaultProps = {
    type: 'button'
};
