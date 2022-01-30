import axios from "axios";

import baseURL from "../urls/urls";

export const axiosServiceCar = axios.create({baseURL: baseURL.allcars})
export const axiosServiceUPC = axios.create({baseURL: baseURL.jsonpl})