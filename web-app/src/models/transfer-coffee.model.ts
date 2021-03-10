/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - transferVaccine
 * A transaction named transferVaccine
 */
@model({name: 'transferVaccine'})
export class TransferVaccine {
  constructor(data?: Partial<TransferVaccine>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.vaccine.transferVaccine';

  /**
   * 
   */
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
  @property({name: 'timestamp'})
  timestamp?: Date;

}

