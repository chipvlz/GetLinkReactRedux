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
      const oldState = [...state];
      let lastGetStatus = oldState.pop();
      lastGetStatus = {
        status: action.status,
        linkObject: action.linkData,
      };
      return [...oldState, lastGetStatus];

    default:
      return state;
  }
};
export default lastGetStatus;
