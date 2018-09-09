import { connect } from 'react-redux';
import addAnswer from '../actions/add-answer.js';

const RenderPropProvider = ({ children, ...props }) => children(props);

const mapDispatchToProps = {
    addAnswer
};

export default connect(
    null,
    mapDispatchToProps
)(RenderPropProvider);
