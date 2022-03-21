// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./base/ERC1155D.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ElevenFiftyFiveD is ERC1155, Ownable {
    uint256 public supply;

    constructor(string memory uri) ERC1155(uri) {}

    function setURI(string memory newuri) public {
        _setURI(newuri);
    }

    function mint(address to) public {
        _mint(to, supply, 1, "");
    }

    function mintMany(address to, uint256 qty) public {
        for (uint256 i = 0; i < qty; i++) {
            _mint(to, supply, 1, "");
            supply++;
        }
    }
}
