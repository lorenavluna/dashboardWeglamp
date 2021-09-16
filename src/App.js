import Sidebar from "./components/Sidebar/Sidebar";
import Domes from "./components/DomesList/Domes";
import Home from "./components/Home/Home";
import {title, logo} from './config/index';
import {useEffect} from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";

function App() {
    useEffect(() => {
        document.title = "Dashboard Weglamp"
    }, []);
    return(
        <main>
            <Sidebar logo={logo} title={title}/>
            <Switch>
                <Route path="/" exact={true}><Home/></Route>
                <Route path="/domes" exact={true}><Domes/></Route>
            </Switch>
        </main>
    );
}
  
export default App;
