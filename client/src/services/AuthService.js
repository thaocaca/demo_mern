
import axiosClient from './axiosClient';

// const registerUrl = "http://localhost:5000/api/v1/auth/register";
// const loginUrl = "http://localhost:5000/api/v1/auth/login";
// const logoutUrl = "http://localhost:5000/api/v1/auth/logout";

export async function register(user) {
    const url = `/auth/register`
    return await axiosClient.post(url, user)
}

export function login(user) {
    const url = `/auth/login`
    return axiosClient.post(url, user)
}

// export function logout(user) {
//     return axios.post(loginUrl, user)
// }
