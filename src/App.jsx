import {Switch, Route, Link, Redirect} from 'react-router-dom';

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
function App2() {
  return (
    <div className="App">
      <div>
          <Link to="/dex">Swap</Link>
          <Link to="/dex/about">About</Link>
          <Link to="/dex/tokenList">TokenList</Link>
        </div>
      <Switch>
        <Redirect to="/dex/swap" from="/dex" exact></Redirect>
        <Route path="/dex/swap" component={Home} exact></Route>
        <Route path="/dex/about" component={About} exact></Route>
        <Route path="/dex/tokenList" component={TokenList} exact></Route>
      </Switch>
    </div>
  )
}

export default App2
