const checkLinkType = (url) => {
  let match = false;
  const reArr = [
    //youtube
    /^(?:https:\/\/|http:\/\/)?(?:www.)?youtube.com\/.*$/,
    //facebook
    /^(?:https:\/\/|http:\/\/)?(?:www.)?facebook.com\/.*$/,
  ];
  reArr.forEach((re) => {
    if (re.test(url)) {
      match = true;
    }
  });
  return match;
};
export default checkLinkType;
