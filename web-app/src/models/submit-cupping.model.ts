/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitTesting
 * A transaction named submitTesting
 */
@model({name: 'submitTesting'})
export class SubmitTesting {
  constructor(data?: Partial<SubmitTesting>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({name: 'tester'})
  tester?: string;

  /**
   * 
   */
  @property({name: 'antibody'})
  antibody?: string;

  /**
   * 
   */
  @property({name: 'antigen'})
  antigen?: string;

  /**
   * 
   */
  @property({name: 'sideEffects'})
  sideEffects?: string;

  /**
   * 
   */
  @property({name: 'acidity'})
  acidity?: string;

  /**
   * 
   */
  @property({name: 'body'})
  body?: string;

  /**
   * 
   */
  @property({name: 'finalScore'})
  finalScore?: string;

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
  timestamp?: string;

}

