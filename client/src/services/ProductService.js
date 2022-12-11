import axios from 'axios';

const apiUrl = "http://localhost:5000/api/v1/products";

export function getProduct(params) {
    const url = `/products`;
    return axios.get(url, {
        headers : {
            Authorization :`Bearer ${params.tokens}`
        }
    });
}

export function addProduct(prod) {
    return axios.post(apiUrl, prod)
}

export function updateProduct(id, prod) {
    return axios.put(apiUrl + "/" + id, prod)
}

export function deteleProduct(id) {
    return axios.delete(apiUrl + "/" + id)
}

export function searchProduct(key) {
    return axios.get(`${apiUrl}/search?name=${key}`)
}