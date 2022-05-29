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

    function testOnlyOwner() public {
        vm.prank(address(0x1234));
        vm.expectRevert(bytes("Ownable: caller is not the owner"));
        simple.set(33);
    }
}
