import {axiosServiceUPC} from "./axios.service";

import {urls} from "../urls/urls";

export const userService = {
    getAllUsers: () => axiosServiceUPC.get(urls.users).then(value => value.data),
    getAllPosts: () => axiosServiceUPC.get(urls.posts).then(value => value.data),
    getAllComments: () => axiosServiceUPC.get(urls.comments).then(value => value.data)
}