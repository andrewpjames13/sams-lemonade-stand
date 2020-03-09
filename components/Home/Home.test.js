import React from 'react';
import moxios from 'moxios';
import { cleanup, render, fireEvent } from '@testing-library/react';
import TestProviders from '../../helpers/TestProviders';
import Home from './index';

const setup = () => {
  const props = {};
  const comp = render((
    <TestProviders>
      <Home {...props} />
    </TestProviders>
  ));

  return { ...comp, props };
};

describe('<Home />', () => {
  beforeEach(moxios.install);

  afterEach(() => {
    moxios.uninstall();
    cleanup();
  });

  it('on mount /ticker fetch sets currentBtcPrice', async (done) => {
    const { getByTestId } = setup();
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: {
          USD: { last: 100 },
        },
        headers: {},
      });
      expect(getByTestId('current-btc-price')).toBeTruthy();
      done();
    });
  });

  it('onSubmit of form address data is pulled back and results rendered', async (done) => {
    const { getByTestId } = setup();
    const btn = getByTestId('transaction-form-button');
    const input = getByTestId('transaction-form-input');

    fireEvent.change(input, { target: { value: '1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F' } });
    btn.click();

    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: {
          hash160:	'660d4ef3a743e3e696ad990364e555c271ad504b',
          address:	'1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F',
          n_tx:	81,
          total_received:	15441506556,
          total_sent:	15441506556,
          final_balance:	0,
          txs: [{
            hash: '660d4ef3a743e3e696ad99036',
            result: 20000,
          }],
        },
        headers: {},
      });
      expect(getByTestId('transaction-result-660d4ef3a743e3e696ad99036')).toBeTruthy();
      done();
    })
  });
});
