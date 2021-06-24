import { CarImage } from "../carImage/carImage";

export interface CarModel {
    carId:number;
    brandName:string;
    brandId:number;
    colorName:string;
    colorId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
    carName:string;
    carImage:CarImage[];
}
