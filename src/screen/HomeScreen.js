import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { WToast, WModal } from 'react-native-smart-tip'
const { width, height } = Dimensions.get('screen')
const bg2 = require('../../assest/bg5.webp')
const avatar = require('../../assest/avatar.jpg')
const a = require('../../assest/home/a.jpg')
const b = require('../../assest/home/b.jpg')
const c = require('../../assest/home/c.jpg')
const d = require('../../assest/home/d.jpg')
export default class HomeScreen extends Component {
    constructor(props) {

        super(props)
    }
    show = (e) => {
        WToast.show({
            data: e,
            textColor: 'rgba(250,250,250,1)',
            backgroundColor: 'rgba(10,10,10,1)',
            //icon: <Image source={bg2} style={{width: 32,height: 20,resizeMode: 'contain'}}/>,
            // duration: WToast.duration.SHORT, //1.SHORT 2.LONG
            position: WToast.position.CENTER,// 1.TOP 2.CENTER 3.BOTTOM
            //icon: <ActivityIndicator color='#fff' size={'large'} style={{padding: 10}}/>
        })
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'rgba(72,209,204,0.8)' }}>
                <TouchableOpacity onPress={() => this.props.navigation.push('Userinfo')} style={styles.header}>
                    <Image source={avatar} style={styles.bigavatar} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.Text2}>北凉、兮</Text>
                    </View>
                    <SimpleLineIcons style={{ marginLeft: 0.45 * width }} name='arrow-right' size={20} color='rgba(5,5,5,0.8)' />
                </TouchableOpacity>
                <View style={styles.iconList}>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='twitter' size={30} color='rgba(72,209,204,1)' /><Text>好友</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='star' size={30} color='rgba(72,209,204,1)' /><Text>收藏</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Search')} style={styles.icon}><AntDesign name='cloudupload' size={30} color='rgba(72,209,204,1)' /><Text>本地</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='enviroment' size={30} color='rgba(72,209,204,1)' /><Text>位置</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='dingding-o' size={30} color='rgba(72,209,204,1)' /><Text>钉钉</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='android1' size={30} color='rgba(72,209,204,1)' /><Text>安卓</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='aliwangwang' size={30} color='rgba(72,209,204,1)' /><Text>记录</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('暂未开放')} style={styles.icon}><AntDesign name='codepen-circle' size={30} color='rgba(72,209,204,1)' /><Text>播客</Text></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.body}>
                    <Image source={avatar} style={styles.loveavatar} />
                    <View style={styles.love}>
                        <Text>我喜欢的音乐</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                            <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>50首</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.songSheet}>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={a} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>代入感</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>19首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={b} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>轻音乐</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>10首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={c} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>压抑感</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>22首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={d} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>主题曲</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>4首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={bg2} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>入眠曲</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>5首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foot}>
                        <Image source={bg2} style={styles.loveavatar} />
                        <View style={styles.love}>
                            <Text>入眠曲</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='checkcircleo' size={12} color='#1890FF' />
                                <Text style={{ fontSize: 10, color: '#929292', marginLeft: 5 }}>5首</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
HomeScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    header: {
        marginVertical: 15,
        marginHorizontal: 0.08 * width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bigavatar: {
        width: 0.12 * width,
        height: 0.12 * width,
        borderRadius: 50,
    },
    iconList: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 0.04 * width,
        paddingVertical: 0.02 * height,
        borderRadius: 15,
        marginVertical: 0.02 * height,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    icon: {
        marginHorizontal: 0.06 * width,
        marginVertical: 0.015 * height,
    },
    loveavatar: {
        width: 0.12 * width,
        height: 0.12 * width,
        borderRadius: 5,
    },
    Text1: {
        fontSize: 17, color: '#929292',
    },
    Text2: {
        fontSize: 18, color: 'rgba(0,0,0,1)',
    },
    body: {
        backgroundColor: 'white',
        marginHorizontal: 0.04 * width,
        paddingVertical: 0.02 * height,
        paddingHorizontal: 0.04 * width,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    love: {
        marginLeft: 20,
    },
    songSheet: {
        backgroundColor: 'white',
        marginHorizontal: 0.04 * width,
        borderRadius: 15,
        marginVertical: 0.02 * height,
        paddingBottom: 0.02 * height
    },
    foot: {
        backgroundColor: 'white',
        paddingTop: 0.02 * height,
        paddingHorizontal: 0.04 * width,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    }
})