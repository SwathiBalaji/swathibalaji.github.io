import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/home";
import Art from "./component/Art/Art";
import tabs from "./component/tabs/tabs";
import terrarium from "./component/terrarium/terrarium";

const Routing = () => {
    return(
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/art" component={Art} />

          <Route exact path="/tabs" component={tabs} />

          <Route exact path="/terrarium" component={terrarium} />
        </Switch>
      </Router>
    )
  }

ReactDOM.render(
    <React.StrictMode>
    <Routing />
  </React.StrictMode>,
    document.getElementById("root")
)