import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class Blank extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <Text>Blank Demo</Text>
            </View>
        )
    }
}