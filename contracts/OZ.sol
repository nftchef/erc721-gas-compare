// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OZ is ERC721, Ownable {
    uint256 public supply;

    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }

    function mintMany(address _to, uint256 _qty) public {
        for (uint256 i = 0; i < _qty; i++) {
            _safeMint(_to, supply);
            supply++;
        }
    }
}
