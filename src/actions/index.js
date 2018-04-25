import axios from 'axios';
import { testYoutubeUrl, getlinkEndpoint } from '../utils/devenv';
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
export const getLinkAjax = () => {
  /*
    lastGetLinkStatus = {
      status: error => client error ,fail => server error, success => get link success
      message: 
    }
  */
  return async (dispatch, getState) => {
    try {
      if (checkLinkType(getState().inputUrl)) {
        const response = await axios.post(getlinkEndpoint, {
          url: getState().inputUrl,
        });
        const dataResponse = response.data;
        console.log(dataResponse['status']);
        if (dataResponse['status'] === 'success') {
          dispatch(saveLinkAndStatus(dataResponse, 'success'));
        } else if (dataResponse['status'] === 'fail') {
          dispatch(saveLinkAndStatus(dataResponse, 'fail'));
        }
      } else if (!getState().inputUrl.trim()) {
        dispatch(saveLinkAndStatus({}, 'blank'));
      } else {
        dispatch(saveLinkAndStatus({}, 'not sp'));
      }
    } catch (error) {
      dispatch(saveLinkAndStatus({}, 'error'));
    }
  };
};
