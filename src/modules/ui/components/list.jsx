import React from 'react';
import { css } from 'emotion';

import Colors from '../colors.js';

const listStyle = css`
    list-style-type: none;
    counter-reset: table-counter;

    margin: 0;
    padding: 0;

    & > * {
        padding: 0 0 60px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:before {
            content: counter(table-counter);
            counter-increment: table-counter;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            border-radius: 100%;
            height: 2em;
            width: 2em;

            border: none;

            margin-bottom: 10px;

            background: ${Colors.extraLightGrey};
            color: ${Colors.grey};
        }
    }
`;

export default function List({ children }) {
    return <ol className={listStyle}>{children}</ol>;
}
