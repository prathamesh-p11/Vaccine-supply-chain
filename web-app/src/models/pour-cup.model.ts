/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - getVaccine
 * A transaction named getVaccine
 */
@model({name: 'getVaccine'})
export class GetVaccine {
  constructor(data?: Partial<GetVaccine>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({name: 'VaccineID', required: true})
  VaccineID: string;

  @property({name: 'batchId', required: true})
  batchId: string;

  /**
   * The instance identifier for this type
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */

}

