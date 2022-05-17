// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Simple is Ownable {
    uint256 private _value;

    function get() external view returns (uint256) {
        return _value;
    }

    function set(uint256 value_) external onlyOwner {
        _value = value_;
    }
}
