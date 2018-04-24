import { connect } from 'react-redux';
import Content from '../components/Content';
import { inputUrl, getLinkAjax } from '../actions';
import axios from 'axios';
import { getlinkEndpoint, testYoutubeUrl } from '../utils/devenv';

const mapStateToProps = (state) => ({
  activePage: state.activePage,
  inputUrl: state.inputUrl,
  lastGetStatus: state.lastGetStatus,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickGetLink: () => {
    dispatch(getLinkAjax());
  },
  onChangeUrl: (e) => {
    dispatch(inputUrl(e.target.value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
