// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Greeting {
    string private greeting;

    constructor(string memory _greeting){
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
