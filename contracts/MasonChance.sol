// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./MasonChanceEnumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MasonChance is ERC721Enumerable, Ownable {
    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, uint256 _quantity) public {
        uint256 totalSupply = _owners.length;
        for (uint256 i; i < _quantity; i++) {
            _mint(_msgSender(), totalSupply + i);
        }
    }

    /// Same function as above, renamed for readability in gas tests
    function mintMany(address to, uint256 _quantity) public {
        uint256 totalSupply = _owners.length;
        for (uint256 i; i < _quantity; i++) {
            _mint(_msgSender(), totalSupply + i);
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
