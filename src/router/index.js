import React from 'react'
import {HashRouter  as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NoMatch from '../pages/NoMatch/NoMatch'
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