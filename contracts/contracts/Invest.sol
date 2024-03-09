// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./NFTCollection.sol";

contract InvestmentPool {
    struct NFTOrder {
        address collection;
        uint256 amount;
    }

    mapping(address => NFTOrder) public orders;

    function invest(uint256 _amount, address _nftAddress) external payable {
        require(msg.value == _amount, "Invalid amount");

        orders[msg.sender] = NFTOrder(_nftAddress, _amount);
    }

    function buyNFT(address _buyer) external {
        NFTOrder memory order = orders[_buyer];
        require(order.amount > 0, "Invalid amount");
        NFTCollection nft = NFTCollection(order.collection);
        nft.safeMint(_buyer);
    }
}
