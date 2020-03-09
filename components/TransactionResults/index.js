import React from 'react';
import styled from 'styled-components';

const Transaction = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius};
    margin: ${theme.spacing(2)} 0;
    padding: ${theme.spacing(2)};
  `}
`;

const DivStyled = styled.div`
  ${({ theme }) => `
    margin: 0 ${theme.spacing(1)};
    @media (min-width: 1225px) {
      margin: 0 ${theme.spacing(2)};
    }
  `}
`;

const TransactionResults = ({ currentBtcPrice, addrData }) => (
  <>
    <h5>Transactions</h5>
    {addrData ? (
      addrData.txs.map((tx) => (
        <Transaction key={tx.hash} className="col-xs-12">
          <h5 style={{ wordBreak: 'break-all' }}>TXID: {tx.hash}</h5>
          <div className="row">
            <DivStyled>
              <h5>Amount Recieved BTC</h5>
              <h4>{tx.result * .00000001} BTC</h4>
            </DivStyled>
            {currentBtcPrice && (
              <DivStyled>
                <h5>Amount Recieved USD</h5>
                <h4>${currentBtcPrice * tx.result * .00000001}</h4>
              </DivStyled>
            )}
          </div>
        </Transaction>
      ))) : (
        <p>No transactions</p>
      )}
  </>
);

export default TransactionResults;
