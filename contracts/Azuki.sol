// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Azuki is ERC721A, Ownable {
    constructor() ERC721A("MyToken", "MTK", 10) {}

    function safeMint(address to, uint256 qty) public {
        _safeMint(to, qty);
    }

    function mintMany(address to, uint256 qty) public {
        _safeMint(to, qty);
    }
}
