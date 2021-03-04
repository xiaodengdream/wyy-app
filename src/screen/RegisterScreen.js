import React, { Component } from 'react';
import { BlurView, VibrancyView } from 'react-native-blur';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import axios from 'axios';
import { WToast } from 'react-native-smart-tip'
import {
    View,
    Text,
    Image,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    findNodeHandle,
} from 'react-native';

const bg = require('../../assest/bg.jpg')
const { width, height } = Dimensions.get('window')
class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: '',
            password: '',
            viewRef: null,
            showmessage: '',
        }
    }
    changeaccounts = (e) => {
        this.setState({
            accounts: e
        })

    }
    changepasswrod = (e) => {
        this.setState({
            password: e
        })

    }
    register = async () => {
        await axios.post("http://192.168.1.13:1000/register",
            {
                accounts: this.state.accounts,
                password: this.state.password,
            })
            .then((responseData) => {
                // console.log(responseData.data.message)
                this.setState({
                    showmessage: responseData.data.message
                })
                if (this.state.showmessage == '注册成功') {
                    this.show(this.state.showmessage)
                    this.props.navigation.push('Login')
                }
                else {
                    this.show(this.state.showmessage)
                }
            })
            .catch((error) => { console.log(error) })

    }
    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }
    show = (e) => {
        WToast.show({
            data: e,
            textColor: 'rgba(250,250,250,1)',
            backgroundColor: 'rgba(10,10,10,1)',
            //icon: <Image source={bg2} style={{width: 32,height: 20,resizeMode: 'contain'}}/>,
            duration: WToast.duration.SHORT, //1.SHORT 2.LONG
            position: WToast.position.BOTTOM // 1.TOP 2.CENTER 3.BOTTOM
        })

    }
    render() {
        return (

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Image
                            ref={(img) => { this.backgroundImage = img; }}
                            onLoadEnd={this.imageLoaded.bind(this)}

                            source={bg} style={styles.bg} />
                        <BlurView
                            style={styles.absolute}
                            viewRef={this.state.viewRef}
                            blurType="light"
                            blurAmount={20}
                        />
                        <TouchableOpacity style={{ position: 'absolute', left: 10, top: 10 }} onPress={() => this.props.navigation.goBack()}>
                            <SimpleLineIcons name='arrow-left' size={25} color='rgba(255,255,255,0.8)' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: 'absolute', left: 0.5 * width - 45, top: 0.12 * height, backgroundColor: 'rgba(10,10,10,0.8)', padding: 20, borderRadius: 20 }}>
                            <Entypo name='beamed-note' size={50} color='rgba(0,255,200,1)' />
                        </TouchableOpacity>
                        <View style={{ marginTop: 0.38 * height }}>
                            <TextInput
                                value={this.state.accounts}
                                placeholder='请输入账号'
                                returnKeyLabel='next'
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.input}
                                onChangeText={this.changeaccounts}
                            />
                            <TextInput
                                value={this.state.passwrod}
                                placeholder='请输入密码'
                                returnKeyLabel='next'
                                autoCapitalize='none'
                                textContentType='password'
                                secureTextEntry={true}
                                autoCorrect={false}
                                style={styles.input}
                                onChangeText={this.changepasswrod}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress={this.register}
                    style={{
                        height: 0.065 * height,
                        backgroundColor: '#48D1CC',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 22,
                        marginVertical: 0.012 * height,
                        marginHorizontal: 0.12 * width,
                    }}
                >
                    <Text style={{ fontSize: 18 }}>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Login')}
                    style={{
                       height: 0.06 * height,
                       // backgroundColor: '#48D1CC',
                        flexDirection: 'row',
                        borderRadius: 22,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:0.22*height,
                        marginHorizontal: 0.32 * width,
                    }}
                >
                    <Text style={{ fontSize: 15,color:'rgba(250,250,250,0.8)'}}>已有帐号,请登录!</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
RegisterScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        ...StyleSheet.absoluteFill,
        flex: 1,
        width: width,
        height: height,
        opacity: 1,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        marginHorizontal: 0.12 * width,
        marginVertical: 0.012 * height,
        height: 0.065 * height,
        paddingLeft: 20,
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
})
export default RegisterScreen;