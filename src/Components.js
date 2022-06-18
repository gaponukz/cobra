import { useEffect, useState } from 'react'
import Web3 from 'web3'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { CONTACT_ABI, CONTACT_ADDRESS } from './config'

const NavbarComponent = props => {
    const ethereumIcon = "https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp"

    const [status, setStatus] = useState('ifNotSigned')

    return (
        <Navbar bg="light" style={{"marginBottom": "25px"}}>
            <Container>
                <img
                    src={ethereumIcon}
                    width="22"
                    height="35"
                    style={{marginRight: '15px'}}
                    className="d-inline-block align-top"
                />
                <Navbar.Brand href="#">Web3 dGame</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {{
                            ifSigned: <SignedAddress account={props.account} />,
                            ifNotSigned: <ConnectButton setAccount={props.setAccount} setStatus={setStatus} />
                        }[status]}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const ConnectButton = props => {
    return (
        <Button variant="outline-dark" onClick={async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
            const accounts = await web3.eth.requestAccounts()

            props.setAccount(accounts[0])
            props.setStatus('ifSigned')

        }}>Connect Wallet</Button>
    )
}

const SignedAddress = props => {
    const getShortAddresses = (address) => {
        return address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "Connect"
    }
    return (
        <div>
            Signed in as: <a href="#"> {getShortAddresses(props.account)} </a>
        </div>
    )
}

const Welcome = props => {
    return (
        <div className="bg-mainBg select-none" >
            <div className="container relative flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                <h1 className="text-5xl z-10 text-textBg font-rubik leading-none sm:text-7xl xl:max-w-3xl">
                    Enter the world of internet economies.
                </h1>

                <p className="mt-6 mb-8 z-10 font-raj text-slate-300 text-lg sm:mb-12 xl:max-w-3xl">
                    Play with cryptos across the world and track your every transaction with dgame.
                </p>

                <div className="flex flex-wrap justify-center">
                    <Button variant="outline-dark" size="lg" disabled={!Boolean(props.account)} onClick={async () => {
                        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
                        const game = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS)
                        const user = await game.methods.registeredUsers(props.account).call()
                        const inviter = document.location.search.split('?id=')[1]

                        if (user.userAdsress === '0x0000000000000000000000000000000000000000') {
                            game.methods.registerUserToGame(inviter || 0).send({
                                from: props.account, gas: 3000000, value: web3.utils.toWei("1", "ether")
                            }, (error, result) => {
                                if (error) {
                                    console.log(error)
                                    alert(error);
                                } else {
                                    props.setPage('main')
                                }
                            })
                        } else {
                            props.setPage('main')
                        }
                    }}>Join to dgames!</Button>
                </div>
            </div>
        </div>
    )
}

const Login = props => {
    return (
        <div>
            <Welcome account={props.account} setPage={props.setPage} />
        </div>
    )
}

const Main = props => {
    const [balance, setBalance] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
            const contract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS)
            const balance = await contract.methods.getUserBalance(props.account).call()
            const User = await contract.methods.registeredUsers(props.account).call()
            
            setBalance(web3.utils.fromWei(balance, 'ether'))
            setUser(User)
        })()
    }, [])

    return (
        <div>
            address: {props.account} <br/>
            balance: {balance} <br/>
            user id: {user?.UserId} <br/>
            invited by: {user?.invitedId} <br/>
        </div>
    )
}

export { Main, Login, NavbarComponent }
