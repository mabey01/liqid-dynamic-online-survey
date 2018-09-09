import { connect } from 'react-redux';

const RenderPropProvider = ({ questions, children }) => children(questions);

export default connect(state => ({ questions: state.questions }))(
    RenderPropProvider
);
