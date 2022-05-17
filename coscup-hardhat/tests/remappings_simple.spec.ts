import { expect, use } from 'chai';
import { ethers, waffle } from 'hardhat';
import { Simple } from '../dist/types';

use(waffle.solidity);

describe('remappings simple', () => {
  let simple: Simple;

  beforeEach(async () => {
    simple = await (await ethers.getContractFactory('Simple'))
      .deploy() as Simple;
  });

  it('test set()', async () => {
    await simple.set(33);
    expect(await simple.get()).eq(33);
  });
});
