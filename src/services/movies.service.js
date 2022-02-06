import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

export const moviesService = {
    getAllMovies: () => axiosService.get(urls.movies).then(value => value.data),
    getAllGenres: () => axiosService.get(urls.genres).then(value => value.data),
    getOneMovie: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
}