// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./MasonChanceEnumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MasonChance is ERC721Enumerable, Ownable {
    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, uint256 _quantity) public {
        _mint(_msgSender(), _quantity);
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
