import React from 'react';
import { css } from 'emotion';

const footerStyle = css`
    display: flex;
    justify-content: space-between;

    padding: 10vh 0;
`;

export default function Footer({ children }) {
    return <div className={footerStyle}>{children}</div>;
}
