// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "hardhat/console.sol";

// error OwnershipErr(address owner);

contract Address {
    // address payable public owner;

    // constructor() {
    //     owner = payable(msg.sender);
    // }

    // modifier OwnershipMod() {
    //     if (msg.sender != owner) revert OwnershipErr(owner);
    //     _;
    // }

    function getAddressBalance() public view returns (address, uint256) {
        return (msg.sender, msg.sender.balance);
    }
}
