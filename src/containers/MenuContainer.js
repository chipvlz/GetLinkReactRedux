import { connect } from 'react-redux';
import { changeActivePage } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state) => ({
  activeItem: state.activePage,
});
const mapDispatchToProps = (dispatch) => ({
  onClick: (e, { name }) => dispatch(changeActivePage(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
