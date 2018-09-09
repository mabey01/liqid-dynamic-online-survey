import { css } from 'emotion';
import Colors from '../colors.js';

export default css`
    width: 100%;

    border-radius: 0;
    border: none;
    border-bottom: 1px solid ${Colors.darkGrey};

    font-size: 2em;
    font-weight: 100;

    padding: 20px 0 0 0;
    box-sizing: border-box;

    background: transparent;

    &:active,
    :focus {
        outline: none;
    }

    &::placeholder {
        color: ${Colors.lightGrey};
    }

    color: ${Colors.darkGrey};
`;
