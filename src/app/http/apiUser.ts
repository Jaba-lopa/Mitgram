import axios from "axios";

const $apiUser = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL_AUTH,
    timeout: 5000
})

export default $apiUser;