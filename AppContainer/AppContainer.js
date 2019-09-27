import React, { Component } from 'react'
import { View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.createRoute(props.routeConfig);
    }
    createRoute(config = []){
        const Route = {};
        const Option = {};
        (config || []).forEach( c => {
            !Route[c.path] && (Route[c.path] = { screen : c.component } );
            c.initPath && (Option.initialRouteName = c.path)
        });
        
        const AppNavigator = createStackNavigator(Route,Object.assign(Option,{
            defaultNavigationOptions: {
                header : null
            },
        }));
        this.Navigator = createAppContainer(AppNavigator);
    }
    render(){
        const { Navigator } = this;
        return (
            <View style={{flex:1,backgroundColor:'#F1F1F1'}}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <Navigator />
            </View>
        )  
    }
}