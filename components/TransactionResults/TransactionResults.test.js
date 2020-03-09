import React from 'react';
import moxios from 'moxios';
import { cleanup, render, fireEvent } from '@testing-library/react';
import TestProviders from '../../helpers/TestProviders';
import TransactionResults from './index';

const setup = () => {
  const props = {
    currentBtcPrice: 1,
    addrData: {
        hash160:	'660d4ef3a743e3e696ad990364e555c271ad504b',
        address:	'1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F',
        n_tx:	81,
        total_received:	15441506556,
        total_sent:	15441506556,
        final_balance:	0,
        txs: [
          {
            hash: '660d4ef3a743e3e696ad99036',
            result: 20000,
          },
          {
            hash: '660d4ef3a743e3e696ad99031',
            result: -120000,
          },
        ],
    }
  };
  const comp = render((
    <TestProviders>
      <TransactionResults {...props} />
    </TestProviders>
  ));

  return { ...comp, props };
};

describe('<TransactionResults />', () => {
  afterEach(cleanup);

  it('only renders recieved transactions', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('transaction-result-660d4ef3a743e3e696ad99036')).toBeTruthy();
    expect(queryByTestId('transaction-result-660d4ef3a743e3e696ad99031')).toBeFalsy();
  });
});
