/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { SubmitTesting } from '../models/submit-cupping.model';
import { ResponseMessage } from '../models/response-message.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitTesting
 * A transaction named submitTesting
 */
export class SubmitTestingController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitTesting', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async submitTestingCreate(@requestBody() requestBody: SubmitTesting): Promise<ResponseMessage> {
    try {
      console.log('submitTesting, requestBody: ')
      console.log(requestBody)

      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dateStr = new Date().toDateString();

      let dataForTesting = {
        function: 'submitTesting',
        tester: requestBody.tester,
        antibody: requestBody.antibody,
        antigen: requestBody.antigen,
        sideEffects: requestBody.sideEffects,
        acidity: requestBody.acidity,
        body: requestBody.body,
        finalScore: requestBody.finalScore,
        batchId: requestBody.batchId,
        transactionId: requestBody.transactionId,
        timestamp: requestBody.timestamp,
        contract: networkObj.contract
      };

      await blockchainClient.submitTesting(dataForTesting);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Testing to Blockchain' });
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
  // @operation('get', '/submitTesting')
  // async submitCuppingFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitTesting[]> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/submitTesting/{id}')
  // async submitCuppingFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitTesting> {
  //   throw new Error('Not implemented');
  // }

}

