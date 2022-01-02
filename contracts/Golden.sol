// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC721Sequencial.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Golden is ERC721Sequencial, Ownable {
    constructor() ERC721Sequencial("MyToken", "MTK") {}

    function safeMint(address to) public {
        _safeMint(to);
    }
}
