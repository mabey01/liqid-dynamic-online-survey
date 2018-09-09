import React from 'react';
import T from 'prop-types';
import { css } from 'emotion';

const barStyle = css`
    position: relative;
    width: 100%;
    height: 20px;

    background: grey;
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
    transition: transform 100ms;

    background: red;
`;

export default function ProgressBar({ current, min, max }) {
    const currentPercentage = ((current - min) * 100) / (max - min);
    if (currentPercentage < 0) {
        console.warn('provided parameters are below 0%');
    }

    if (currentPercentage > 100) {
        console.warn('provided parameters are above 100%');
    }

    const realPercentage = Math.max(0, Math.min(100, currentPercentage));
    const humanPercentage = Math.round(currentPercentage * 100) / 100;

    return (
        <div className={barStyle} title={`${humanPercentage}%`}>
            <div className={getProgressStyle(realPercentage)} />
        </div>
    );
}

ProgressBar.propTypes = {
    current: T.number,
    min: T.number,
    max: T.number
};

ProgressBar.defaultProps = {
    current: 0,
    min: 0,
    max: 100
};
