import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getById: (id) => axiosService.get(`${urls.comments}/${id}`).then(value => value.data)
}