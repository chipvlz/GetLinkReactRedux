import axios from 'axios';
import checkLinkType from '../utils/checkLinkType';

export const inputUrl = (url) => ({
  type: 'INPUT_URL',
  url,
});
export const changeActivePage = (activePage) => ({
  type: 'CHANGE_ACTIVE_PAGE',
  activePage,
});
export const saveLinkAndStatus = (linkData, status) => ({
  type: 'SAVE_LINK_AND_STATUS',
  //status 'fail' 'error' 'success'
  status,
  // linkData is an Object
  linkData,
});
export const startGetLink = {
  type: 'START_GET_LINK',
};
export const getLinkAjax = () => {
  /*
    lastGetLinkStatus = {
      status: error => client error ,fail => server error, success => get link success, fetching => is fetching
      message: 
    }
  */
  return async (dispatch, getState) => {
    try {
      dispatch(startGetLink);
      const url = getState().inputUrl.trim();
      if (checkLinkType(url)) {
        const response = await axios.post('https://apigetlink.vuhuucuong.com/', {
          url: url,
        });
        const dataResponse = response.data;
        if (dataResponse['status'] === 'success') {
          dispatch(saveLinkAndStatus(dataResponse, 'success'));
        } else if (dataResponse['status'] === 'fail') {
          dispatch(saveLinkAndStatus(dataResponse, 'fail'));
        }
      } else if (!url) {
        dispatch(saveLinkAndStatus({}, 'blank'));
      } else {
        dispatch(saveLinkAndStatus({}, 'not sp'));
      }
    } catch (error) {
      dispatch(saveLinkAndStatus({}, 'error'));
    }
  };
};
