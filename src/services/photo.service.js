import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getById: (id) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}