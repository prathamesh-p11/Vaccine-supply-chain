/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { Company } from '../models/grower.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Company
 * A participant named Company
 */
export class CompanyController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Company', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async companyCreate(@requestBody() requestBody: Company): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('request body: ')
      console.log(requestBody)
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.companyId,
        organization: requestBody.organization,
        address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
        memberType: 'company',
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Company to Blockchain' });
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
  // @operation('get', '/Company')
  // async growerFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<Company[]> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @returns Request was successful
   */
  // @operation('head', '/Company/{id}')
  // async growerExists(@param({ name: 'id', in: 'path' }) id: string): Promise<{
  //   exists?: boolean;
  // }> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/Company/{id}')
  // async growerFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<any> {
  //  let networkObj = await blockchainClient.connectToNetwork();
  //   let dataForQuery = {
  //     function: 'query',
  //     id: id,
  //     contract: networkObj.contract,
  //     network: networkObj.network
  //   };

  //   console.log('before blockchainClient.queryByKey')
  //   let result = await blockchainClient.queryByKey(dataForQuery);
  //   console.log(`lookup by key ${id}`);
  //   console.log('result after calling client.queryByKey: ')
  //   console.log(result)
  //   if (result.id) {
  //     var rez = JSON.parse(result.toString());
  //     console.log(rez)
  //     let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
  //     let grower = new Company({ companyId: rez.id, organization: rez.organization, address: address });
  //     return grower;
  //   }
  //   return result;
  // }

  /**
   *
   *

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  // @operation('put', '/Company/{id}')
  // async growerReplaceById(@requestBody() requestBody: Company, @param({ name: 'id', in: 'path' }) id: string): Promise<Company> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @returns Request was successful
   */
  // @operation('delete', '/Company/{id}')
  // async growerDeleteById(@param({ name: 'id', in: 'path' }) id: string): Promise<{

  // }> {
  //   throw new Error('Not implemented');
  // }

}

