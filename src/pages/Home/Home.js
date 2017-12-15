import React, {Component} from 'react'
import {Button} from 'antd-mobile'
import Top from '../../containers/Top/Top'
import {Link} from 'react-router-dom'
import store from "../../store/store";
import * as action from '../../actions/action'
export default class Home extends Component{
    componentWillMount () {
        console.log('componentWillMount')
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    handleClick = () => {
        import('./ModuleA')
            .then(({ moduleA }) => {
                // Use moduleA
                store.dispatch(action.fetchRequest(1234))
            })
            .catch(err => {
                // Handle failure
            });
    };
    render(){
        console.log('render')
        return(
            <div>
                <Top></Top>
                <Button>测试</Button>
                <Link to="/about">About
                </Link>
                <div>
                    <button onClick={this.handleClick}>Load</button>
                </div>
            </div>
        )
    }
}