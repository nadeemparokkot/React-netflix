import axios from "axios"
import { baseurl } from "./Constant/constants"

const instance = axios.create({
    baseURL:baseurl
})

export default instance