import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react'
const { width, height } = Dimensions.get('window')
const bg = require('../assest/bg5.webp')
const avatar = require('../assest/avatar.jpg')
const c1 = require('../assest/content4.png')
export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            news: false,
        }
    }
    render() {
        return (
            <View>
                <View style={styles.content}>
                    <Text style={{fontSize:20}}>基本信息</Text>
                    <Text style={styles.Text1}>年龄</Text>
                    <Text style={styles.Text1}>性别</Text>
                    <Text style={styles.Text1}>地区</Text>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    content:{
        marginHorizontal: 0.1 * width,
        backgroundColor:'#eee',
        borderRadius:15,
        paddingHorizontal:0.03*width,
        paddingVertical:0.01*height,
    },
    Text1: {
        fontSize: 17, color: '#929292',
    },
    Text2: {
        fontSize: 18, color: 'rgba(0,0,0,1)',
    },
})