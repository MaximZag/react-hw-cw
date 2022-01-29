import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

export const carService={
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(`${urls.cars}`, car).then(value => value.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
}
