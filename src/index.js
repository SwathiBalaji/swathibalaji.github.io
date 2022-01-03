import React from "react";
import ReactDOM from "react-dom";
import Header from './component/Header/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/home";
import Art from "./component/Art/Art";
import tabs from "./component/tabs/tabs";
import terrarium from "./component/terrarium/terrarium";
import  Footer  from "./component/Footer/footer";
import  casestudy  from "./component/Casestudy/casestudy";
import hewnfrost from "./component/HewnFrost/hewnfrost";

const Routing = () => {
    return(
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/art" component={Art} />

          <Route exact path="/hewandfrost" component={hewnfrost} />

          <Route exact path="/tabs" component={tabs} />

          <Route exact path="/casestudy" component={casestudy} />

          <Route exact path="/terrarium" component={terrarium} />
        </Switch>
        <Footer/>
      </Router>
    )
  }

ReactDOM.render(
    <React.StrictMode>
    <Routing />
  </React.StrictMode>,
    document.getElementById("root")
)