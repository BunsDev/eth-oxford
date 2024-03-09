// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./NFTCollection.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

contract InvestmentPool is AutomationCompatibleInterface {
    struct NFTOrder {
        address collection;
        uint256 amount;
    }

    mapping(address => NFTOrder) public orders;
    mapping(uint256 => address) public ordersOwners;
    uint256 public ordersCount;

    function invest(uint256 _amount, address _nftAddress) external payable {
        require(msg.value == _amount, "Invalid amount");

        orders[msg.sender] = NFTOrder(_nftAddress, _amount);
        ordersOwners[ordersCount] = msg.sender;
        ordersCount++;
    }

    function buyNFT(address _buyer) public {
        NFTOrder memory order = orders[_buyer];
        NFTCollection nft = NFTCollection(order.collection);
        if (nft.isMinTimestampReached()) {
            require(order.amount > 0, "Invalid amount");
            nft.safeMint(_buyer);
        }
    }

    function checkOrders() public {
        for (uint256 i = 0; i < ordersCount; i++) {
            address buyer = ordersOwners[i];
            buyNFT(buyer);
        }
    }

    function isBuyReady() public view returns (bool) {
        for (uint256 i = 0; i < ordersCount; i++) {
            address buyer = ordersOwners[i];
            NFTOrder memory order = orders[buyer];
            NFTCollection nft = NFTCollection(order.collection);
            if (nft.isMinTimestampReached()) {
                return true;
            }
        }
        return false;
    }

    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = isBuyReady();
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        checkOrders();
    }
}
