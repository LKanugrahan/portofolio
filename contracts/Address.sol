// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract Address {
    address payable public owner;
    error Ownership(address owner);
    constructor() {
        owner = payable(msg.sender);
    }
    function getOwner() public view returns (address) {
        if (msg.sender != owner) revert Ownership(owner);
        return owner;
    }
}
