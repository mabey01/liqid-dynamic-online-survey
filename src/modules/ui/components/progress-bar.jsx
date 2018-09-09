import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

import Colors from '../colors.js';
import getPercentage from '../helpers/get-percentage.js';
import getHumanFloat from '../helpers/get-human-float.js';

const barStyle = css`
    position: relative;
    width: 100%;
    height: 20px;

    background: ${Colors.extraLightGrey};
    border-radius: 2px;
    overflow: hidden;
`;

const getProgressStyle = percentage => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transform: translateX(-${100 - percentage}%);
    transition: transform 200ms;

    background: ${Colors.green};
`;

export default function ProgressBar({ value, min, max }) {
    const currentPercentage = getPercentage(value, max, min);
    if (currentPercentage < 0) {
        console.warn('provided parameters are below 0%');
    }

    if (currentPercentage > 100) {
        console.warn('provided parameters are above 100%');
    }

    const realPercentage = Math.max(0, Math.min(100, currentPercentage));
    const humanPercentage = getHumanFloat(currentPercentage);

    return (
        <div className={barStyle} title={`${humanPercentage}%`}>
            <div className={getProgressStyle(realPercentage)} />
        </div>
    );
}

ProgressBar.propTypes = {
    value: T.number,
    min: T.number,
    max: T.number
};

ProgressBar.defaultProps = {
    value: 0,
    min: 0,
    max: 100
};
