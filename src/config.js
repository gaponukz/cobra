export const CONTACT_ADDRESS = '0x9368bd00A38b57E77077149694feC9c8d7173C66'

export const CONTACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "index",
				"type": "uint8"
			},
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
	}
]