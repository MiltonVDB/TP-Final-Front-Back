import axios from './axios'

const API_SESSION = 'http://localhost:3040/api/session'

export const registerRequest = async (user) => await axios.post(API_SESSION + '/register', user)

export const loginRequest = async (user) => await axios.post(API_SESSION + '/login', user)