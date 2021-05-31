import { ResponseModel } from '../responseModel';
import { RentalDetailModel } from './rentalDetailModel';

export interface RentalResponseModel extends ResponseModel {
  data: RentalDetailModel[];
}
