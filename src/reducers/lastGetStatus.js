const lastGetStatus = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_LINK_AND_STATUS':
      return [
        ...state,
        {
          status: action.status,
          linkObject: action.linkData,
        },
      ];
    default:
      return state;
  }
};
export default lastGetStatus;
