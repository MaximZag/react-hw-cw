import {axiosServiceCar} from "./axios.service";

import {urls} from "../urls/urls";

export const carService = {
    getAll: () => axiosServiceCar.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosServiceCar.delete(`${urls.cars}/${id}`),
    create: (car) => axiosServiceCar.post(`${urls.cars}`, car).then(value => value.data),
    updateById: (id, car) => axiosServiceCar.patch(`${urls.cars}/${id}`, car).then(value => value.data),
}
