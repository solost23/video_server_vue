import { request } from "../utils/request.js"

export function getVideos(params) {
    return request(
        {
            url: "/api/videos/search", 
            method: "get",
            params: params,  
        }
    )
}

export function getVideoInfo(id) {
    return request(
        {
            url: "/api/videos/" + id, 
            method: "get", 
        }
    )
}

export function getVideoComments(params) {
    return request(
        {
            url: "/api/comments", 
            method: "get", 
        }
    )
}

export function createVideoInfo(data) {
    return request(
        {
            url: "/api/videos", 
            method: "post", 
            data: data, 
        }
    )
}