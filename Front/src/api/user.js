import axios from './axios'

export const registerRequest = async (user) => await axios.post('/session/register', user)

export const loginRequest = async (user) => await axios.post('/session/login', user)

export const verifyTokenRequest = async () => await axios.get('/session/verify')