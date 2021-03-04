import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react'
const { width, height } = Dimensions.get('window')
const bg = require('../assest/bg5.webp')
const avatar = require('../assest/avatar.jpg')
const c1 = require('../assest/content4.png')
export default class Dynamic extends Component {
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
                    <View style={styles.header}>
                        <Image source={avatar} style={styles.bigavatar} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.Text2}>北凉、兮</Text>
                            <Text style={styles.Text1}>15分钟前</Text>
                        </View>
                        <TouchableOpacity style={styles.follow2}>
                            <Text style={{ fontSize: 16, color: '#1890FF' }}>+关注</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.Text2}>好漂亮的夜景，你喜欢吗？</Text>
                        <Image source={bg} style={styles.pic} resizeMode='cover' />

                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Image source={avatar} style={styles.bigavatar} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.Text2}>北凉、兮</Text>
                            <Text style={styles.Text1}>2分钟前</Text>
                        </View>
                        <TouchableOpacity style={styles.follow2}>
                            <Text style={{ fontSize: 16, color: '#1890FF' }}>+关注</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.Text2}>圣诞节，想好了怎么过吗？</Text>
                        <Image source={c1} style={styles.pic} resizeMode='contain' />

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {

    },
    header: {
        marginVertical: 15,
        marginHorizontal: 0.1 * width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bigavatar: {
        width: 0.12 * width,
        height: 0.12 * width,
        borderRadius: 50,
    },
    body: {
        marginHorizontal: 0.1 * width,
    },
    Text1: {
        fontSize: 17, color: '#929292',
    },
    Text2: {
        fontSize: 18, color: 'rgba(0,0,0,1)',
    },
    follow2: {
        marginLeft: 0.28 * width,
        height: 0.09 * width,
        width: 0.17 * width,
        borderRadius: 25,
        borderColor: '#1890FF',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pic: {
        width: 0.8 * width,
        height: 0.28 * height,

        borderRadius: 20,
        marginVertical: 15,

    },
})