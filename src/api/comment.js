import { request } from "../utils/request.js"

export function getComments(params) {
    return request(
        {
            url: "/api/comments", 
            method: "get", 
            params: params, 
        }
    )
}