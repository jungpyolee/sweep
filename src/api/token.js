export const setToken = {
  accesstoken: localStorage.getItem("accesstoken"),
  refreshtoken: localStorage.getItem("refershtoken"),
};
export const getDatawithTokenCheck = (res) => {
  if (res.headers.accesstoken) {
    localStorage.setItem("accesstoken", res.headers.accesstoken);
    localStorage.setItem("refreshtoken", res.headers.refreshtoken);
    return res.data;
  } else {
    return res.data;
  }
};
