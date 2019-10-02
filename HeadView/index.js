import React, { Component } from 'react'
import { View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native'

class HeadView extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const { Option:{ LeftContainer,CenterContainer,RightContainer } = {}, style = {} } = this.props;
        return (
            <View style={[BaseStyle.BaseContainer,style]}>
                <View style={BaseStyle.BaseLeftContainer}>
                    {LeftContainer? LeftContainer:null}
                </View>
                <View style={BaseStyle.BaseCenterContainer}>
                    {CenterContainer? CenterContainer:null}
                </View>
                <View style={BaseStyle.BaseRightContainer}>
                    {RightContainer? RightContainer:null}
                </View>
            </View>
        )
    }
}

const DefaultSize = 48;
const {width:ScreenWidth, height:ScreenHeight} = Dimensions.get('window');   
const BaseStyle = StyleSheet.create({
    BaseContainer:{
        width:'100%',
        minHeight:DefaultSize + 24, //48 基础高度 24 状态栏近似高度
        borderBottomColor:'#999',
        borderBottomWidth:1,
        display:"flex",
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    BaseLeftContainer:{
        minWidth:DefaultSize,
        minHeight:DefaultSize,
    },
    BaseCenterContainer:{
        width:ScreenWidth - DefaultSize * 2,
        height:DefaultSize,
    },
    BaseRightContainer:{
        minWidth:DefaultSize,
        minHeight:DefaultSize,
    },
})

export default HeadView;