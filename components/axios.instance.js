import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../util/firebase.init";


// const local = 'http://localhost:4000/api/v1'
const local = 'https://blogsite-backend-one.vercel.app/api/v1'

const url = local

const api = axios.create({
    baseURL: url,
    Headers: {
        'Content-Type': 'application/json',
    }
})


export const getCurrentUser = async (id) => {
    try {
        const user = await api.get(`/users/find/one?email=${id}`)
        return user
    } catch (error) {
        throw error
    }
}


export default api