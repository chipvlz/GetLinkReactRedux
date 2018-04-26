const lastGetStatus = (
  state = [
    {
      status: 'init',
      linkObject: {},
    },
  ],
  action,
) => {
  switch (action.type) {
    case 'START_GET_LINK':
      return [
        ...state,
        {
          status: 'fetching',
        },
      ];
    case 'SAVE_LINK_AND_STATUS':
      let currentGetStatus = state.pop();
      currentGetStatus = {
        status: action.status,
        linkObject: action.linkData,
      };
      return [...state, currentGetStatus];

    default:
      return state;
  }
};
export default lastGetStatus;
