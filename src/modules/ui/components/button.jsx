import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

import { Colors } from 'ui';

const buttonStyle = css`
    display: inline-block;

    padding: 10px 30px;
    color: ${Colors.darkGrey};
    background: ${Colors.lightGrey};

    border: none;
    border-radius: 2px;

    font-weight: 100;

    &:hover {
        cursor: pointer;
        color: ${Colors.lightGrey};
        background: ${Colors.darkGrey};
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

const buttonStyleBig = css`
    font-size: 3em;
`;

const buttonStyleRegular = css`
    font-size: 2em;
`;

export default function Button({ children, size, ...props }) {
    return (
        <button
            {...props}
            className={`${buttonStyle} ${size === 'regular' &&
                buttonStyleRegular} ${size === 'big' && buttonStyleBig}`}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: T.string,
    size: T.oneOf(['small', 'regular', 'big'])
};

Button.defaultProps = {
    type: 'button',
    size: 'small'
};
