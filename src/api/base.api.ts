import axios from "axios"


export const BASE_URL = "https://rickandmortyapi.com/api/"

export const instace = axios.create({
    baseURL :BASE_URL
})