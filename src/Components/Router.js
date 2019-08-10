import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import Header from 'Components/Header';



export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tv" exact component={TV}></Route>
            <Route path="/detail"  component={Detail}></Route>
            <Route path="/search"  component={Search}></Route>
            <Redirect from="*" to="/" ></Redirect>
        </Switch>
        </>
    </Router>
);