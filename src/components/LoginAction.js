import axios from "axios";

export function LoginAction(data) {
  return dispatch => {
    return axios.post(
      "https://cstonboarding.azurewebsites.net/personnel/login",
      data
    );
  };
}
