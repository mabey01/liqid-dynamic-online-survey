import React from 'react';
import { css } from 'emotion';

import { Colors } from 'ui';

const questionStyle = css`
    display: flex;
    justify-content: center;

    padding: 10vh 0;

    font-size: 3em;
    line-height: 1em;
`;

const questionLabelStyle = css`
    color: ${Colors.lightGrey};
`;

export default function Question({ question }) {
    return (
        <div className={questionStyle}>
            <div>
                <span className={questionLabelStyle}>Q: </span>
                {question}
            </div>
        </div>
    );
}
