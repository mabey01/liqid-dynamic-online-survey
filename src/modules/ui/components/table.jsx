import React from 'react';
import { css } from 'emotion';

import Colors from '../colors.js';

const tableStyle = css`
    list-style-type: none;
    counter-reset: table-counter;

    margin: 0;
    padding: 0;

    & > * {
        padding: 0 0 50px 0;
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

export default function Table({ children }) {
    return <ol className={tableStyle}>{children}</ol>;
}
