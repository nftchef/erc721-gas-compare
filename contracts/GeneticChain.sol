// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC721Sequencial.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GeneticChain is ERC721Sequencial, Ownable {
    constructor() ERC721Sequencial("MyToken", "MTK") {}

    function safeMint(address to) public {
        _safeMint(to);
    }

    function mintMany(address to, uint256 qty) public {
        for (uint256 i = 0; i < qty; i++) {
            _safeMint(to);
        }
    }
}
