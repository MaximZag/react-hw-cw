import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

export const moviesService = {
    getAllMovies: (page,id) => axiosService.get(`${urls.movies}&page=${page}&with_genres=${id}`).then(value => value.data),
    getAllGenres: () => axiosService.get(urls.genres).then(value => value.data),
    getOneMovie: (id) => axiosService.get(`${urls.movie}/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=images`).then(value => value.data),
    getMoviesByGenre: (id)=>axiosService.get(`${urls.movies}&with_genres=${id}`).then(value => value.data),
    switchPage:(page)=>axiosService.get(`${urls.movies}&page=${page}`).then(value => value.data)
}