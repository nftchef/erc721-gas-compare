// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC721B.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Blimpie is ERC721B, Ownable {
    uint256 supply;

    constructor() ERC721B("MyToken", "MTK") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }

    function mintMany(address to, uint256 qty) public {
        for (uint256 i = 0; i < qty; i++) {
            _safeMint(to, supply);
            supply++;
        }
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override
        returns (string memory)
    {
        return string(abi.encodePacked("http://example"));
    }
}
