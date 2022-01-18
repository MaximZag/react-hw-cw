import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}