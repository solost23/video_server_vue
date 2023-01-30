import { request } from "../utils/request.js"

export function register(data) {
    return request(
        {
            url: "/api/register", 
            method: "post", 
            data: data, 
        }
    )
}

export function login(data) {
    return request(
        {
            url: "/api/login", 
            method: "post", 
            data: data, 
        }
    )
}

export function logout(data) {
    return request(
        {
            url: "/api/logout", 
            method: "post", 
            data: data, 
        }
    )
}

export function getUserInfo(id) {
    return request(
        {
            // or `/api/users/${id}`
            url: "/api/users/" + id, 
            method: "get", 
        }
    )
}