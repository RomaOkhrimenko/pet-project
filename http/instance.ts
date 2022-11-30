import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://turkey-headscarf.cyclic.app/api'
})