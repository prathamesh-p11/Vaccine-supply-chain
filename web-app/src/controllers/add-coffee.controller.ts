/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { AddVaccine } from '../models/add-coffee.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by addVaccine
 * A transaction named addVaccine
 */
export class AddVaccineController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/addVaccine', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async addVaccineCreate(@requestBody() requestBody: AddVaccine): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();

      let dateStr = new Date().toDateString();
      let dataForAddVaccine = {
        function: 'addVaccine',
        size: requestBody.size,
        batchState: requestBody.batchState,
        company: requestBody.company,
        transactionId: requestBody.transactionId,
        timestamp: dateStr,
        contract: networkObj.contract
      };

      await blockchainClient.addVaccine(dataForAddVaccine);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added vaccine to Blockchain' });
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
  // @operation('get', '/addVaccine')
  // async addCoffeeFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<AddVaccine[]> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/addVaccine/{id}')
  // async addCoffeeFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<AddVaccine> {
  //   throw new Error('Not implemented');
  // }

}

