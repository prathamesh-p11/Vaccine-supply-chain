/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - addVaccine
 * A transaction named addVaccine
 */
@model({name: 'addVaccine'})
export class AddVaccine {
  constructor(data?: Partial<AddVaccine>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'size'})
  size?:string;


  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;

  /**
   * The identifier of an instance of grower
   */
  @property({name: 'company'})
  company?: string

  /**
   * The instance identifier for this type
   */
  // @property({name: 'batchId', required: true})
  // batchId?: string;

  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}

