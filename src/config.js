export const CONTACT_ADDRESS = '0xe6d863a2cef4F1CA6Bde7DEFA10D76bc04375C7b'

export const CONTACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "circleCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToPay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sendWinnerAmount",
				"type": "uint256"
			}
		],
		"name": "addGameLevel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "gameId",
				"type": "uint8"
			}
		],
		"name": "joinToGame",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "inviterId",
				"type": "uint256"
			}
		],
		"name": "registerUserToGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "circleCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountToPay",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sendWinnerAmount",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct Pyramid.Game",
				"name": "game",
				"type": "tuple"
			}
		],
		"name": "NewGame",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "circleCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountToPay",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sendWinnerAmount",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct Pyramid.Game",
				"name": "game",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			}
		],
		"name": "WinnerPayment",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "currentGameIdIndex",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "currentUserIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAdsress",
				"type": "address"
			}
		],
		"name": "getUserBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAdress",
				"type": "address"
			}
		],
		"name": "hasAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "levels",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "circleCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToPay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sendWinnerAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "UserId",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "userAdsress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "invitedId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersId",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]