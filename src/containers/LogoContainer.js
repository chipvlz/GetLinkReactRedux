import { connect } from 'react-redux';
import Logo from '../components/Logo';

const mapDispatchToProps = (dispatch) => ({
  onLogoClick: () => {
    window.location.href = '/';
  },
});
export default connect(null, mapDispatchToProps)(Logo);
