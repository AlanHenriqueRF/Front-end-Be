import axios from "axios";

const BASE_URL =`${import.meta.env.VITE_API}`

function getEmployees(){
    const promise = axios.get(BASE_URL)
    return promise
}

const ApiEmployees = {getEmployees}
export default ApiEmployees