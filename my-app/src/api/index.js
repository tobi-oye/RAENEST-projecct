import axios from "axios";

export function dashboard() {
  return axios.get(`https://601d848abe5f340017a19c29.mockapi.io/dashboard`);
}
