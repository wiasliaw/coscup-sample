import 'dotenv/config';

import fs from 'fs';
import path from 'path';
import { HardhatUserConfig } from 'hardhat/config';

import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';

const config: HardhatUserConfig = {
  // default network
  defaultNetwork: 'hardhat',

  // networks
  networks: {
    // hardhat networks
    hardhat: {
      throwOnCallFailures: true,
      throwOnTransactionFailures: true,
    },

    // rinkeby
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY}`,
      chainId: 4,
    },
  },

  // solidity
  solidity: {
    compilers: [
      {
        version: '0.8.13',
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: 'berlin',
        },
      },
    ],
  },

  // repository config
  paths: {
    sources: path.resolve(__dirname, 'contracts'),
    tests: path.resolve(__dirname, 'tests'),
    cache: path.resolve(__dirname, 'dist/.cache'),
    artifacts: path.resolve(__dirname, 'dist/artifacts'),
  },

  // typechain
  typechain: {
    outDir: 'dist/types',
    target: 'ethers-v5',
  },

  // etherscan
  etherscan: {
    apiKey: {
      rinkeby: `${process.env.ETHERSCAN}`,
    },
  },
};

export default config;
