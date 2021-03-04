import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Homepage from '../../component/Homepage'
import Dynamic from '../../component/Dynamic'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const { width, height } = Dimensions.get('window')

const bg = require('../../assest/bg5.webp')
const avatar = require('../../assest/avatar.jpg')
const c1 = require('../../assest/content4.png')

export default class UserinfoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            news: false,
        }
    }
    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={{ position: 'absolute', left: 10, top: 10, zIndex: 2 }} onPress={() => this.props.navigation.goBack()}>
                    <SimpleLineIcons name='arrow-left' size={25} color='rgba(255,255,255,0.8)' />
                </TouchableOpacity>
                <Image source={bg} style={styles.bg} />
                <Image source={avatar} style={styles.avatar} />
                <ScrollView style={styles.ScrollView}>
                    <TouchableOpacity style={styles.follow}>
                        <Text style={{ fontSize: 18, color: '#1890FF' }}>+关注</Text>
                    </TouchableOpacity>
                    <View style={styles.nickname}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>北凉、兮</Text>
                    </View>
                    <View style={styles.support}>
                        <Text style={styles.Text1}>粉丝 <Text style={styles.Text2}>15</Text></Text>
                        <Text style={styles.Text1}>关注 <Text style={styles.Text2}>30</Text></Text>
                        <Text style={styles.Text1}>获赞 <Text style={styles.Text2}>10</Text></Text>
                    </View>
                    <View style={styles.homeNews}>
                        {this.state.home ?

                            <Text style={{ color: 'black', fontSize: 20 }}>主页</Text> :
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    home: true,
                                    news: false
                                })
                            }
                            }
                            ><Text style={{ color: '#929292', fontSize: 20 }}>主页</Text></TouchableOpacity>
                        }
                        {this.state.news ?
                            <Text style={{ color: 'black', fontSize: 20 }}>动态</Text> :
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    home: false,
                                    news: true
                                })
                            }
                            }><Text style={{ color: '#929292', fontSize: 20 }}>动态</Text></TouchableOpacity>
                        }
                    </View>
                    {this.state.home ?
                        <Homepage/> :
                        <Dynamic />}
                </ScrollView>
            </ScrollView>
        )
    }
}
UserinfoScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    bg: {
        width: width,
        height: 0.3 * height,

    },
    avatar: {
        width: 0.32 * width,
        height: 0.32 * width,
        left: 0.34 * width,
        top: 0.3 * height - 0.16 * width - 20,
        borderRadius: 60,
        position: 'absolute',
        zIndex: 1
    },
    ScrollView: {
        backgroundColor: 'rgb(243,243,243)',
        marginTop: -20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    follow: {
        marginLeft: 0.7 * width,
        marginTop: 0.03 * height,
        height: 0.1 * width,
        width: 0.21 * width,
        borderRadius: 25,
        borderColor: '#1890FF',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nickname: {
        paddingTop: 0.01 * height,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        marginHorizontal: 0.1 * width,
        paddingBottom: 0.05 * height,
        borderBottomColor: 'rgba(146,146,146,0.2)'
    },
    support: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingHorizontal:0.05*width,
    },
    Text1: {
        fontSize: 17, color: '#929292',
    },
    Text2: {
        fontSize: 18, color: 'rgba(0,0,0,1)',
    },
    homeNews: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.03 * height
    }

})