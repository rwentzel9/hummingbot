import 'jest-extended';
import {Serum} from '../../../../src/connectors/serum/serum';
import {unpatch} from '../../../services/patch';
import {Solana} from '../../../../src/chains/solana/solana';
import {default as config} from './fixtures/serumConfig';
// @ts-ignore
import {getMarkets, getOrderBooks, getTickers} from "../../../../src/clob/clob.controllers";

jest.setTimeout(1000000);

beforeAll(async () => {
  await Solana.getInstance(config.solana.network);

  await Serum.getInstance(config.serum.chain, config.serum.network);
});

afterEach(() => {
  unpatch();
});

it('Temporary', async () => {
  const marketName = 'BTC/USDT';

  const commonParameters = {
    chain: config.serum.chain,
    network: config.serum.network,
    connector: config.serum.connector,
  }

  const market = (await getMarkets({
    ...commonParameters,
    name: marketName,
  })).body;
  console.log('market', JSON.stringify(market, null, 2));

  // const orderBook = (await getOrderBooks({
  //   ...commonParameters,
  //   marketName,
  // })).body;
  // console.log('orderBook', JSON.stringify(orderBook, null, 2));

  const ticker = (await getTickers({
    ...commonParameters,
    marketName,
  })).body;
  console.log('ticker', JSON.stringify(ticker, null, 2));

  // const order = await createOrders(getNewOrderTemplate(marketName));
  // expect(order).toBeDefined();
  //
  // const orders = await createNewOrders(3);
  // expect(orders).toBeDefined();

});
