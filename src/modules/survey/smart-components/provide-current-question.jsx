import { connect } from 'react-redux';

export default Component =>
    connect((state, { questionIndex }) => state.questions[questionIndex])(
        Component
    );
