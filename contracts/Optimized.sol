// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./ERC721B.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Optimized is ERC721B, Ownable {
    constructor() ERC721B("MyToken", "MTK") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
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
