import React from 'react'
import {HashRouter  as Router, Route, Switch} from 'react-router-dom'
import asyncComponent from './AsyncComponent/AsyncComponent'
import Home from '../pages/Home/Home'
const About = asyncComponent(() => import("../pages/About/About"));
const NoMatch = asyncComponent(() => import("../pages/NoMatch/NoMatch"));
const RouterMap = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
)
export default RouterMap