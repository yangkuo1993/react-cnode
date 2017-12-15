import React, {Component} from 'react'
import {Button} from 'antd-mobile'
import Top from '../../containers/Top/Top'
import {Link} from 'react-router-dom'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Top></Top>
                <Button>测试</Button>
                <Link to="/about">About
                </Link>
            </div>
        )
    }
}