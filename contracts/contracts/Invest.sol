// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract InvestmentPool {
    mapping(address => uint256) public balances;

    function invest(uint256 _amount) external payable {
        require(msg.value == _amount, "Invalid amount");

        balances[msg.sender] += _amount;
    }

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Insufficient balance");

        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }
}
