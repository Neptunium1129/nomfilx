import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from 'Components/Header';
import Detail from "Routes/Detail";
import Search from "Routes/Search";



export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tv" exact component={TV}></Route>
            <Route path="/detail"  component={Detail}></Route>
            <Route path="/search"  component={Search}></Route>
            <Route path="/movie/:id"  component={Detail}></Route>
            <Route path="/show/:id"  component={Detail}></Route>
            <Redirect from="*" to="/" ></Redirect>
        </Switch>
        </>
    </Router>
);