// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/remappings_simple.sol";

contract ContractTest is Test {
    Simple public simple;

    function setUp() public {
        simple = new Simple();
    }

    function testSet() public {
        simple.set(33);
        assertEq(simple.get(), 33);
    }
}
