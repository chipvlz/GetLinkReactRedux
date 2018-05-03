import { connect } from 'react-redux';
import Content from '../components/Content';
import { inputUrl, getLinkAjax, changeActivePage } from '../actions';

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
  onClickDownload: (e, { links }) => {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = links.url;
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },
  onChangePage: (activePage, e) => {
    dispatch(changeActivePage(activePage));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
