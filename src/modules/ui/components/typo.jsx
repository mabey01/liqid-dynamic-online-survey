import React from 'react';
import { css } from 'emotion';

const typoStyle = css`
    font-family: -apple-system, sans-serif;
    font-weight: 100;
`;

export default function Typo({ children }) {
    return <div className={typoStyle}>{children}</div>;
}
