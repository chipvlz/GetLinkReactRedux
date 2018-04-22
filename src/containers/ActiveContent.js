import { connect } from 'react-redux';
import Content from '../components/Content';
import { inputUrl } from '../actions';

const mapStateToProps = (state) => ({
  activePage: state.activePage,
  inputUrl: state.inputUrl,
});
const mapDispatchToProps = (dispatch) => ({
  onClickGetLink: () => {
    console.log('clicked!');
  },
  onChangeUrl: (e) => {
    dispatch(inputUrl(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
