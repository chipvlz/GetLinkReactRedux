const activePage = (state = 'getlink', action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_PAGE':
      return action.activePage;
    default:
      return state;
  }
};
export default activePage;
