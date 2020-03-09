import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import TransactionForm from '../components/TransactionForm';
import TransactionResults from '../components/TransactionResults';

const Container = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing(4)} ${theme.spacing(2)};
    max-width: 1225px;
    margin: 0 auto;
  `}
`;

const Svg = styled.svg`
  ${({ theme }) => `
    fill: ${theme.colors.primary};
    width: 50px;
    @media (min-width: 1225px) {
      width: 100px;
    }
  `}
`;

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
`;

const Index = () => {
  const [currentBtcPrice, setCurrentBtcPrice] = useState();
  const [addrData, setAddrData] = useState();

  useEffect(() => {
    axios.get('https://blockchain.info/ticker')
      .then(res => setCurrentBtcPrice(res.data.USD.last))
      .catch(res => setCurrentBtcPrice(null))
  }, []);

  const onSubmit = (vals) => (
    axios.get(`https://blockchain.info/rawaddr/${vals.address}?cors=true&limit=50`)
      .then(res => setAddrData(res.data))
      .catch(res => setAddrData(null))
  )

  return (
    <Container className="contianer-fluid">
      <div className="row center-xs">
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24"><path d="M17,24H7L5,8H19Zm-6.2-5.5a.7.7,0,0,1,.7.7.7.7,0,0,1-.7.8.7.7,0,0,1-.8-.8A.7.7,0,0,1,10.8,18.5ZM14,16a1,1,0,1,1-1,1A.9.9,0,0,1,14,16Zm-3.5-3A1.5,1.5,0,1,1,9,14.5,1.5,1.5,0,0,1,10.5,13Zm1.7-9,2.1-4,1.3.6L13.8,4H18c0,.9,1.1,1.6,2,1.6V7H4V5.6c.9,0,2-.7,2-1.6Z" transform="translate(-4)"/></Svg>
        <Title className="col-xs-12">Sam's Lemonade Stand</Title>
        <h5 className="col-xs-12">When life gives you Bitcoin, make lemonade!</h5>
        {currentBtcPrice && <p data-testid="current-btc-price" className="col-xs-12">Current btc price ${currentBtcPrice}</p>}
      </div>
      <TransactionForm onSubmit={onSubmit} />
      <TransactionResults
        currentBtcPrice={currentBtcPrice}
        addrData={addrData}
      />
    </Container>
  );
}

export default Index;
