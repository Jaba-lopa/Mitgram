import axios from "axios";

const $apiRoom = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL_ROOM,
    timeout: 5000
})

export default $apiRoom;