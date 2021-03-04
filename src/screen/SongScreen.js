import React, { Component } from 'react';
import Video from 'react-native-video'
import { View, Text, Image, Easing, StyleSheet, Animated, TouchableOpacity, Dimensions, } from 'react-native';
import Slider from '@react-native-community/slider';
import { WToast } from 'react-native-smart-tip'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const { width, height } = Dimensions.get('screen')
const bg2 = require('../../assest/bg5.webp')
const bgCD = require('../../assest/bgCD.png')
export default class SongScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: 0.0,
            paused: false,
            slideValue: 0.0,
            duration: 0.0,
            spinValue: new Animated.Value(0),
            id: this.props.navigation.state.params.id,
            songname: this.props.navigation.state.params.name,
            keywords: this.props.navigation.state.params.key,
            indexs: this.props.navigation.state.params.indexs,
            songnames: [],
            ids: '',
            // arrays:[],
            durations: Math.floor(this.props.navigation.state.params.durations / 1000),
            songurl: '',
            songpic: '',
            show: false,


        }
        this.rotation = false
        this.spinAnimated = Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 6000,
            easing: Easing.linear,
            useNativeDriver: true,
        })

    }
    spining() {
        if (this.rotation) {
            this.state.spinValue.setValue(0)
            this.spinAnimated.start(() => {
                this.spining()
            })
        }
    }

    spin() {
        this.rotation = !this.rotation
        if (this.rotation) {
            this.spinAnimated.start(() => {
                this.spinAnimated = Animated.timing(this.state.spinValue, {
                    toValue: 1,
                    duration: 6000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
                this.spining()
            })
        } else {
            this.state.spinValue.stopAnimation((oneTimeRotate) => {
                this.spinAnimated = Animated.timing(this.state.spinValue, {
                    toValue: 1,
                    duration: (1 - oneTimeRotate) * 3000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            })
        }
    }

    play = () => {
        this.spin()
    }


    componentDidMount() {

        this.fetchData();
        this.spin();

    }
    setDuration(duration) {
        this.setState({ duration: this.state.durations });
    }
    setTime(data) {
        const sliderValue = parseInt(this.state.currentTime);
        this.setState({
            slideValue: sliderValue,
            currentTime: data.currentTime,
        });
    }

    formatMediaTime(duration) {
        const min = Math.floor(duration / 60);
        const second = duration - min * 60;
        const mins = min >= 10 ? min : ("0" + min);
        const seconds = second >= 10 ? second : ("0" + second)
        return mins + ":" + seconds;
    }
    fetchData() {

        fetch("https://www.autumnfish.cn/search/?keywords=" + this.state.keywords)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    songnames: responseData.result.songs,
                })
                //console.log(responseData.result.songs)  
                //console.log(this.state.songnames[this.state.indexs].id)

                fetch("https://www.autumnfish.cn/song/url?id=" + this.state.songnames[this.state.indexs].id)
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({
                            songurl: responseData.data[0].url
                        })
                        // console.log(responseData.data[0].url)
                    })
                    .catch((error) => { console.log(error) })

                fetch("https://www.autumnfish.cn/song/detail?ids=" + this.state.songnames[this.state.indexs].id)
                    .then((response) => response.json())
                    .then((responseData) => {
                        this.setState({
                            songpic: responseData.songs[0].al.picUrl
                        })
                        // console.log(responseData.songs[0].al.picUrl)
                    })
                    .catch((error) => { console.log(error) })
            })
            .catch((error) => { console.log(error) })

    }
    changelove = () => {
        this.setState({
            show: !this.state.show
        })
    }
    preSong = () => {
        if (this.state.indexs <= 0) {
            this.refs.toast.show('hello world!', DURATION.LENGTH_LONG)
        }
        else {
            this.setState({
                indexs: this.state.indexs - 1
            })

            this.fetchData()
        }

    }
    nextSong() {
        if (this.state.indexs >= this.state.songnames.length) {
            alert('ok')
        }
        else {
            this.setState({
                indexs: this.state.indexs + 1
            })
            this.fetchData()
        }
    }
    show = (e) => {
        WToast.show({
            data: e,
            textColor: 'white',
            backgroundColor: 'rgba(200,200,200,0.4)',
            //icon: <Image source={bg2} style={{width: 32,height: 20,resizeMode: 'contain'}}/>,
            duration: 2000, //1.SHORT 2.LONG
            position: -1 // 1.TOP 2.CENTER 3.BOTTOM
        })

    }
    render() {
        const aaa = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const bbb = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['45deg', '90deg']
        })
        const ccc = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '180deg']
        })


        return (
            <View>
                <Image source={bg2} style={styles.bg2} />
                {/* <Text>{this.state.keywords}</Text>
                <Text>{this.state.indexs}</Text> */}
                <View style={{ flexDirection: 'column', paddingVertical: 0.015 * height }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0.02 * width, paddingVertical: 0.02 * height, zIndex: 20 }} onPress={() => this.props.navigation.goBack()}>
                        <SimpleLineIcons name='arrow-left' size={25} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>
                    <View style={{
                        overflow: 'hidden', flexWrap: 'nowrap', position: 'absolute',
                        paddingVertical: 0.025 * height, marginHorizontal: 0.1 * width,
                        width: 0.8 * width,
                    }}>
                        <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', }}>{this.state.songname}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', paddingVertical: 0.02 * height, right: 0.02 * width }} onPress={() => this.show('分享成功')}>
                        <SimpleLineIcons name='share-alt' size={25} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>
                </View>

                <Animated.View style={{
                    position: 'absolute',
                    left: 0.5 * width - 0.3 * width,
                    top: 0.5 * height - 0.55 * width,
                    width: 0.6 * width,
                    height: 0.6 * width,
                    borderRadius: 80,
                    borderWidth: 0.05,
                    borderColor: 'rgba(200,200,200,1)',
                    backgroundColor: 'rgba(255,0,255,0.5)',
                    transform: [{ rotateZ: aaa }]
                }}>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    left: 0.5 * width - 0.3 * width,
                    top: 0.5 * height - 0.55 * width,
                    width: 0.6 * width,
                    height: 0.6 * width,
                    borderRadius: 80,
                    borderWidth: 0.05,
                    borderColor: 'rgba(200,200,200,1)',
                    backgroundColor: 'rgba(0,255,255,0.5)',
                    transform: [{ rotateZ: bbb }]
                }}>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    left: 0.5 * width - 0.3 * width,
                    top: 0.5 * height - 0.55 * width,
                    width: 0.6 * width,
                    height: 0.6 * width,
                    borderRadius: 80,
                    borderWidth: 0.05,
                    borderColor: 'rgba(200,200,200,1)',
                    backgroundColor: 'rgba(255,255,0,0.5)',
                    transform: [{ rotateZ: ccc }]
                }}>
                </Animated.View>

                <View style={{
                    position: 'absolute',
                    left: 0.5 * width - 0.3 * width,
                    top: 0.5 * height - 0.55 * width,

                }}>
                    {this.state.songurl ?
                        <Animated.Image source={{ uri: this.state.songpic }} style={{
                            width: 0.6 * width, height: 0.6 * width, borderRadius: 200,
                            borderWidth: 5,
                            borderColor: 'rgba(250,250,250,0.7)',
                            transform: [{ rotateZ: aaa }],
                        }} /> :

                        <Image style={{ width: 0.6 * width, height: 0.6 * width, borderRadius: 2000, backgroundColor: 'rgba(255,255,255,0.5)', }} />
                    }

                </View>

                <Animated.Image></Animated.Image>

                <View style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width,
                    paddingHorizontal: 0.12 * width,
                    top: 0.77 * height,
                }}>
                    <TouchableOpacity onPress={() => { this.changelove(), this.show('收藏成功') }}
                        style={{}}>
                        {this.state.show ?
                            <EvilIcons name='heart' size={30} color='rgba(255,0,0,1)'></EvilIcons> :
                            <EvilIcons name='heart' size={30} color='rgba(200,200,200,1)'></EvilIcons>
                        }

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('下载中')}
                    >
                        <EvilIcons name='arrow-down' size={30} color='rgba(200,200,200,1)'></EvilIcons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('刷新成功')}
                    >
                        <EvilIcons name='redo' size={30} color='rgba(200,200,200,1)'></EvilIcons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.show('评论专区'),
                            this.props.navigation.push('Comment', {
                                commentId: this.state.songnames[this.state.indexs].id
                            })
                    }
                    }
                    >
                        <EvilIcons name='comment' size={30} color='rgba(200,200,200,1)'></EvilIcons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.show('功能专区')}
                    >
                        <EvilIcons name='pointer' size={30} color='rgba(200,200,200,1)'></EvilIcons>
                    </TouchableOpacity>
                </View>
                <Slider
                    style={{ marginTop: 0.8 * height, marginHorizontal: 0.1 * width }}
                    value={this.state.slideValue}
                    maximumValue={this.state.duration}
                    minimumTrackTintColor={'rgba(255,255,255,0.4)'}
                    maximumTrackTintColor={'rgba(255,255,255,1)'}
                    step={1}
                    thumbTintColor={'rgba(255,255,255,1)'}
                    onValueChange={value => this.setState({ currentTime: value })}
                // onSlidingComplete={value => this.player.seek(value)}
                />
                <View style={{ position: 'absolute', right: 0.03 * width, top: 0.83 * height }}>
                    <Text style={{ fontSize: 12, color: 'rgb(240,240,240)' }}>{this.formatMediaTime(this.state.duration)}</Text>
                </View>
                <View style={{ position: 'absolute', left: 0.03 * width, top: 0.832 * height }}>
                    <Text style={{ fontSize: 12, color: 'rgb(240,240,240)' }}>{this.formatMediaTime(this.state.slideValue)}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 0.045 * height, alignItems: 'center' }}>

                    <TouchableOpacity style={{ position: 'absolute', left: 0.1 * width }} onPress={() => alert('单曲循环')}>
                        <Ionicons name='shuffle' size={28} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', left: 0.28 * width, zIndex: 15 }} onPress={() => this.preSong()}>
                        <SimpleLineIcons name='control-start' size={18} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>
                    {this.state.paused ?
                        <View style={styles.playbutton}>
                            <TouchableOpacity onPress={() => { this.setState({ paused: !this.state.paused }), this.play() }}>
                                <Ionicons name='play-sharp' style={{ marginLeft: 0.01 * width }} size={20} color='rgba(255,255,255,1)' />
                            </TouchableOpacity>
                        </View> :
                        <View style={styles.playbutton}>
                            <TouchableOpacity onPress={() => { this.setState({ paused: !this.state.paused, pauseds: false }), this.play() }}>
                                <Ionicons name='pause-sharp' size={20} color='rgba(255,255,255,1)' />
                            </TouchableOpacity>
                        </View>
                    }
                    <TouchableOpacity onPress={() => this.nextSong()}
                        style={{ position: 'absolute', right: 0.28 * width, zIndex: 15 }} >
                        <SimpleLineIcons name='control-end' size={18} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('列表')}
                        style={{ position: 'absolute', right: 0.1 * width, zIndex: 15 }} >
                        <Ionicons name='ios-list-outline' size={28} color='rgba(255,255,255,1)' />
                    </TouchableOpacity>
                </View>
                {this.state.songurl ?
                    <Video source={{ uri: this.state.songurl }}
                        ref='player'
                        volume={1.0}
                        muted={false}                             // true代表静音，默认为false.         
                        paused={this.state.paused}
                        // true代表暂停，默认为false      
                        resizeMode="cover"
                        repeat={true}
                        onLoad={data => this.setDuration(data)}	  // 当视频加载完毕时的回调函数
                        playInBackground={false}                  // 当app转到后台运行的时候，播放是否暂停
                        onProgress={e => this.setTime(e)}         //  进度控制，每250ms调用一次，以获取视频播放的进度
                        onEnd={() => console.log('fished')}
                        style={{ backgroundColor: 'red' }}
                        playInBackground={true}
                    /> :
                    <Video source={{ uri: 'http://m7.music.126.net/20201130164938/8d08a0f5ff7cff460fad61bf1811d1e9/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3341268214/0cb0/03f7/39bd/1e41c4f23e75810fdb33d34fa2e02b7d.mp3' }}
                        ref='player'
                        volume={1.0}
                        muted={false}                             // true代表静音，默认为false.         
                        paused={this.state.paused}
                        // true代表暂停，默认为false      
                        resizeMode="cover"
                        repeat={true}
                        onLoad={data => this.setDuration(data)}	  // 当视频加载完毕时的回调函数
                        playInBackground={false}                  // 当app转到后台运行的时候，播放是否暂停
                        onProgress={e => this.setTime(e)}         //  进度控制，每250ms调用一次，以获取视频播放的进度
                        onEnd={() => console.log('fished')}
                        style={{ backgroundColor: 'red' }}
                        playInBackground={true}
                    />}

            </View>
        )
    }
}
SongScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    bg2: {
        width: width,
        height: height,
        position: 'absolute',
    },
    playbutton: {
        position: 'absolute',
        left: 0.5 * width - 0.06 * width,
        width: 0.12 * width,
        height: 0.12 * width,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'rgb(240,240,240)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})