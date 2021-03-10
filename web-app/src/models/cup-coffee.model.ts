/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Vaccine
 * An asset named Vaccine
 */
@model({name: 'Vaccine'})
export class VaccineClass {
  constructor(data?: Partial<VaccineClass>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.vaccine.Vaccine';

  /**
   * The instance identifier for this type
   */
  @property({name: 'VaccineID', required: true})
  VaccineID: string;

  /**
   * 
   */
  @property({name: 'shotType', required: true})
  shotType: string;

  /**
   * 
   */
  @property({name: 'practitioner', required: true})
  practitioner: string;

  /**
   * 
   */
  @property({name: 'passedBy', required: true})
  passedBy: string;

  /**
   * 
   */
  @property({name: 'count', required: true})
  count: number;

  /**
   * 
   */
  @property({name: 'lastUpdated', required: true})
  lastUpdated: string;

}

