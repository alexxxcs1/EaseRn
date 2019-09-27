import React, { Component } from 'react'
import { View,Text,StatusBar } from 'react-native';
import AppContainer from '../AppContainer';
import Blank from '../Blank';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    init({routeConfig=[]}){
        const { _routeConfig = [] } = defaultProps;
        this.routeConfig = [ ..._routeConfig, ...routeConfig ];
    }
    render(){
        const { routeConfig } = this;
        return (
            <AppContainer routeConfig={routeConfig}/>
        )
    }
}

const defaultProps = {
    _routeConfig:[
        {
            path:'_blank',
            component: Blank,
        }
    ],
}