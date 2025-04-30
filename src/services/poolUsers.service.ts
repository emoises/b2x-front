import axios from "axios";

const BASE_URL = 'http://localhost:4000/pool-user';

export const poolUsersAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});
