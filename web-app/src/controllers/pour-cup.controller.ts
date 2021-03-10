/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { GetVaccine } from '../models/pour-cup.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by getVaccine
 * A transaction named getVaccine
 */
export class GetVaccineController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/getVaccine', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async getVaccineCreate(@requestBody() requestBody: GetVaccine): Promise<ResponseMessage> {

    try {
      console.log('getVaccine, requestBody: ')
      console.log(requestBody)

      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dateStr = new Date().toDateString();
      // dateStr = dateStr.toDateString();
      let dataForGetVaccine = {
        function: 'getVaccine',
        VaccineID: requestBody.VaccineID,
        batchId: requestBody.batchId,
        transactionId: requestBody.transactionId,
        contract: networkObj.contract
      };

      await blockchainClient.getVaccine(dataForGetVaccine);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: `Vaccine issued with id ${requestBody.VaccineID} added to Blockchain` });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }

  }

  /**
   *
   *

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/getVaccine')
  // async pourCupFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<GetVaccine[]> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/getVaccine/{id}')
  // async pourCupFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<GetVaccine> {
  //   throw new Error('Not implemented');
  // }

}

