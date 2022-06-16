import { useEffect, useState } from 'react'
import Web3 from 'web3'
import './App.css'

import { CONTACT_ABI, CONTACT_ADDRESS } from './config'

const App = () => {
    const [account, setAccount] = useState()
    const [page, setPage] = useState('login')

    return (
        <div>
            {{
                login: <Login setAccount={setAccount} setPage={setPage} />,
                main: <Main account={account} />
            }[page]}
        </div>
    )
}

const Main = props => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        (async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
            const contract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS)
            const balance = await contract.methods.getUserBalance(props.account).call()
            
            setBalance(web3.utils.fromWei(balance, 'ether'))
        })()
    }, [])

    return (
        <div>
            address: {props.account} <br/>
            balance: {balance}
        </div>
    )
}

const Login = props => {
    return (
        <button onClick={async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
            const accounts = await web3.eth.requestAccounts()
            
            props.setAccount(accounts[0])
            props.setPage('main')
        }}>
            Sing up
        </button>
    )
}

export default App
