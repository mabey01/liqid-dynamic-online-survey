import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <h1>Dynamic Online Survey</h1>
            <p>
                Welcome to the dynamic online Survey. Please click{' '}
                <Link to="/question/0">here</Link> to start.
            </p>
        </div>
    );
}
