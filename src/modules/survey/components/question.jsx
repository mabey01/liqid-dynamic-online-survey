import React from 'react';
import { css } from 'emotion';

import { Colors } from 'ui';

const questionStyle = css`
    &:before {
        content: 'Q:';
        color: ${Colors.lightGrey};
        margin-right: 10px;
    }

    display: flex;
    justify-content: center;

    padding: 10vh 0;

    font-size: 3em;
    line-height: 1em;
`;

export default function Question({ question }) {
    return <div className={questionStyle}>{question}</div>;
}
