// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCollection is ERC721 {
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
        string memory name,
        string memory symbol,
        uint256 minTimestamp,
        address investContract
    ) ERC721(name, symbol) {
        _minTimestamp = minTimestamp;
        _investContract = investContract;
    }

    function safeMint(address to) public onlyInvestContract {
        require(block.timestamp >= _minTimestamp, "Too early to mint");
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function isMinTimestampReached() public view returns (bool) {
        return block.timestamp >= _minTimestamp;
    }
}
