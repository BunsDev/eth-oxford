// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public _minTimestamp;
    uint256 public _price;
    address public _investContract;

    modifier onlyInvestContract() {
        require(msg.sender == _investContract, "Only invest contract can call this function");
        _;
    }

    constructor(
        string memory name,
        string memory symbol,
        uint256 price,
        address investContract
    ) ERC721(name, symbol) Ownable(msg.sender){
        _investContract = investContract;
        _price = price;
        _investContract = investContract;
    }

    function safeMint(address to) public onlyInvestContract {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function setPrice(uint256 newPrice) public onlyOwner {
        _price = newPrice;
    }

    function getPrice() public view returns (uint256) {
        return _price;
    }
}
