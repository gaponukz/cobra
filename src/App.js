import { Login, UserAdmin, GamePage, NavbarComponent } from './Components'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [account, setAccount] = useState()
    const [page, setPage] = useState('login')

    return (
        <div>
            <NavbarComponent account={account} setAccount={setAccount} setPage={setPage} />
            {{
                login: <Login setAccount={setAccount} setPage={setPage} account={account} />,
                admin: <UserAdmin account={account} setPage={setPage} />,
                games: <GamePage account={account} setPage={setPage} />
            }[page]}
        </div>
    )
}

export default App
