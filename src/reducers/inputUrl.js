const inputUrl = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_URL':
      return action.url;
    default:
      return state;
  }
};
export default inputUrl;
