import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css'

const Home = () => {
  return (
    <div>Home</div>
  )
}

const About = () => {
  return (
    <div>About</div>
  )
}
const TokenList = () => {
  return (
    <div>TokenList</div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <div>
          <NavLink to="/home/swap">home</NavLink>
          <NavLink to="/home/about">about</NavLink>
          <NavLink to="/home/tokenList">about</NavLink>
        </div>
        <Route path="/home/swap" component={Home} exact></Route>
        <Route path="/home/about" component={About} exact></Route>
        <Route path="/home/tokenList" component={TokenList} exact></Route>
      </Switch>
    </div>
  )
}

export default App
