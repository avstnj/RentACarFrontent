import { ResponseModel } from "../responseModel";
import { CarModel } from "./carModel";

export interface CarResponseModel extends ResponseModel {
    data:CarModel[];
}
