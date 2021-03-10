/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Address} from './address.model';

/**
 * The model class is generated from OpenAPI schema - Company
 * A participant named Company
 */
@model({name: 'Company'})
export class Company {
  constructor(data?: Partial<Company>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.vaccine.Company';

  /**
   * 
   */
  @property({name: 'isFairTrade', required: true})
  isFairTrade: boolean;

  /**
   * The instance identifier for this type
   */
  @property({name: 'companyId', required: true})
  companyId: string;

  /**
   * 
   */
  @property({name: 'organization', required: true})
  organization: string;

  /**
   * A concept named Address
   */
  @property({name: 'address', required: true})
  address: Address;

}

