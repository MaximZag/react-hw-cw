import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getById: (id) => axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data)
}