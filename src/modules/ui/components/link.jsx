import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { css } from 'emotion';

const linkStyle = css`
    text-decoration: none;

    color: inherit;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default function Link({ children, ...props }) {
    return (
        <ReactRouterLink {...props} className={linkStyle}>
            {children}
        </ReactRouterLink>
    );
}
