import { connect } from 'react-redux';
import removeAllAnswers from '../actions/remove-all-answers.js';

const RenderPropProvider = ({ children, ...props }) => children(props);

const mapDispatchToProps = {
    removeAllAnswers
};

export default connect(
    null,
    mapDispatchToProps
)(RenderPropProvider);
