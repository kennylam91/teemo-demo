import request from "../assets/js/request";

export const actions = {
  fetchProfiles(state) {
    return request({
      url: "/tests",
      method: "GET"
    });
  },
  fetchProfileDetail(state, id) {
    return request({
      url: "/tests/" + id,
      method: "GET"
    });
  }
};
