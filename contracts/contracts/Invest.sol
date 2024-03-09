// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

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

    function buyNFT(address _nftAddress) external {
        NFTOrder memory order = orders[msg.sender];
        require(order.collection == _nftAddress, "Invalid NFT address");
        require(order.amount > 0, "Invalid amount");
    }

}
