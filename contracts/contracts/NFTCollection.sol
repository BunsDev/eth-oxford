// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public _minTimestamp;
    address public _investContract;

    modifier onlyInvestContract() {
        require(
            msg.sender == _investContract,
            "Caller is not the invest contract"
        );
        _;
    }

    constructor(
        address initialOwner,
        string memory name,
        string memory symbol,
        uint256 minTimestamp,
        address investContract
    ) ERC721(name, symbol) Ownable(initialOwner) {
        _minTimestamp = minTimestamp;
    }

    function safeMint(address to) public onlyInvestContract {
        require(block.timestamp >= _minTimestamp, "Too early to mint");
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}
