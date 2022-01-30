import axios from "axios";

import baseURLCars from "../urls/urls";

export const axiosServiceCar=axios.create({baseURLCars})