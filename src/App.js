// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Reports from './views/Reports';
import Masters from './views/Masters';
import Activities from './views/Activities';
import Finance from './views/Finance';
import Administrator from './views/Administrator';
import Home from './views/Home';
import Footer from './components/Footer';
import { Redirect, Route, Switch } from 'react-router';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/activities" component={Activities}></Route>
        <Route exact path="/reports" component={Reports}></Route>
        <Route exact path="/masters" component={Masters}></Route>
        <Route exact path="/finance" component={Finance}></Route>
        <Route exact path="/administrator" component={Administrator}></Route>
        <Redirect to ="/" />
      </Switch>
      <Footer/>
      </>
  );
}

export default App;
