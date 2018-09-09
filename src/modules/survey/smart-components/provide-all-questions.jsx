import { connect } from 'react-redux';

const RenderPropProvider = ({ children, ...props }) => children(props);

export default connect(state => state)(RenderPropProvider);
