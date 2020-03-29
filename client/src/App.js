import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useWeb3 } from '@openzeppelin/network/react';
import Web3Data from './components/Web3Data';

const infuraProjectId = '9f2cb36083fc41209894c5f941ecdfe0';

function App() {
  const web3Context = useWeb3(`wss://ropsten.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;
  return (
    <div className="App">
      <div>
        <h1> Infura React DApp with Components!</h1>
        <Web3Data title="Web3 Data" web3Context={web3Context} />
      </div>
    </div >
  );
}

export default App;
