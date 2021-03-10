// /* tslint:disable:no-any */
// import {operation, param, requestBody} from '@loopback/rest';
// import {Vaccine} from '../models/coffee.model';

// /**
//  * The controller class is generated from OpenAPI spec with operations tagged
//  * by Vaccine
//  * An asset named Vaccine
//  */
// export class VaccineController {
//   constructor() {}

//   /**
//    * 
//    * 

//    * @param requestBody Model instance data
//    * @returns Request was successful
//    */
//   @operation('post', '/Vaccine')
//   async coffeeCreate(@requestBody() requestBody: Vaccine): Promise<Vaccine> {
//     throw new Error('Not implemented');
//   }

//   /**
//    * 
//    * 

//    * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
//    * @returns Request was successful
//    */
//   @operation('get', '/Vaccine')
//   async coffeeFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Vaccine[]> {
//     throw new Error('Not implemented');
//   }

//   /**
//    * 
//    * 

//    * @param id Model id
//    * @returns Request was successful
//    */
//   @operation('head', '/Vaccine/{id}')
//   async coffeeExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
//   exists?: boolean;
// }> {
//     throw new Error('Not implemented');
//   }

//   /**
//    * 
//    * 

//    * @param id Model id
//    * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
//    * @returns Request was successful
//    */
//   @operation('get', '/Vaccine/{id}')
//   async coffeeFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Vaccine> {
//     throw new Error('Not implemented');
//   }

//   /**
//    * 
//    * 

//    * @param requestBody Model instance data
//    * @param id Model id
//    * @returns Request was successful
//    */
//   @operation('put', '/Vaccine/{id}')
//   async coffeeReplaceById(@requestBody() requestBody: Vaccine, @param({name: 'id', in: 'path'}) id: string): Promise<Vaccine> {
//     throw new Error('Not implemented');
//   }

//   /**
//    * 
//    * 

//    * @param id Model id
//    * @returns Request was successful
//    */
//   @operation('delete', '/Vaccine/{id}')
//   async coffeeDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
// }> {
//     throw new Error('Not implemented');
//   }

// }

