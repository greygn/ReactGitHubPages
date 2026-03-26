import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom'

function Root() {
    return (
        <HashRouter>
            <App></App>
        </HashRouter>
    );
}

function Info() {
    return <h2>Info</h2>
}

function Home() {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Hello world! =)
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
}

function App() {
    return <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" component={Home} />
            <Route path="/info" component={Info} />
        </Routes>
    </div>
}

export default Root;
