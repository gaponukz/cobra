// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Pyramid {
    uint256 currentGameIndex = 0;
    uint256 currentUserIdIndex = 1;
    address contractOwner;

    struct User {
        uint256 UserId;
        address payable userAdsress;
        uint256 invitedId;
    }

    struct Game {
        uint256 circleCount;
        uint256 amountToPay;
        uint256 sendWinnerAmount;
    }
    
    mapping (uint8 => Game) public levels;
    mapping (uint256 => address) usersId;
    mapping (address => User) public registeredUsers;
    mapping (uint256 => mapping (uint8 => uint256)) public currentUserIndex;
    mapping (uint256 => mapping (uint8 => mapping (uint256 => User))) pools;

    modifier onlyRegistered {
        require(registeredUsers[msg.sender].userAdsress != address(0));
        _;
    }

    modifier onlyOwner {
        require(msg.sender == contractOwner);
        _;
    }

    constructor () {
        contractOwner = msg.sender;
        
        addGameLevel({ 
            index: 0, 
            circleCount: 3, 
            amountToPay: 1 ether, 
            sendWinnerAmount: 1.5 ether 
        });
    }

    function addGameLevel(uint8 index, uint256 circleCount, uint256 amountToPay, uint256 sendWinnerAmount) public onlyOwner {
        levels[index] = Game({ circleCount: circleCount, amountToPay: amountToPay, sendWinnerAmount: sendWinnerAmount });
    }

    function registerUserToGame(uint256 inviterId) payable public returns(uint256) {
        require (msg.value == 1 ether, "For joining in game you need pay 1 ether");

        registeredUsers[msg.sender] = User(currentUserIdIndex, payable(msg.sender), inviterId);
        usersId[currentUserIdIndex] = msg.sender;
        currentUserIdIndex += 1;

        return currentUserIdIndex - 1;
    }

    function joinToGame(uint8 gameId) payable public onlyRegistered {
        require (msg.value == levels[gameId].amountToPay, "Insufficient amount of contribution");

        uint256 index = currentUserIndex[currentGameIndex][gameId];

        pools[currentGameIndex][gameId][index] = registeredUsers[msg.sender];
        currentUserIndex[currentGameIndex][gameId] += 1;

        if (index > levels[gameId].circleCount) {
            uint256 winnerIndex = index - levels[gameId].circleCount;
            address payable selectedAddress = pools[currentGameIndex][gameId][winnerIndex].userAdsress;

            selectedAddress.transfer(levels[gameId].sendWinnerAmount);
        }

        // TODO: referal system
    }
}
