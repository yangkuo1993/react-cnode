import React, {Component} from 'react'
import {Button} from 'antd-mobile'
import Top from '../../containers/Top/Top'
import {Link} from 'react-router-dom'
export default class Home extends Component{
    handleClick = () => {
        import('./ModuleA')
            .then(({ moduleA }) => {
                // Use moduleA
                console.log(moduleA)
            })
            .catch(err => {
                // Handle failure
            });
    };
    render(){
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