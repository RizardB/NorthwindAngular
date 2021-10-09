import { BaseResponseModel } from './baseResponseModel';
export interface BaseDataResponseModel<T> extends BaseResponseModel{
  data: T[];
}
