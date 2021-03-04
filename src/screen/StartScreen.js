import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const bg = require('../../assest/bg.jpg')
const { width, height } = Dimensions.get('window')
class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 3,
        }
    }
    dj() {
        const time1 = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
            if (this.state.num == 0) {
                clearInterval(time1)
                this.props.navigation.push('Register')
            }
        }, 1000)
    }
   componentDidMount() {
        //this.dj()
        setTimeout(() => {
            this.props.navigation.push('Register')
        }, 3000)
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={{ width: width, height: height, }} onPress={() => {
                    this.props.navigation.push('Register')
                }}>
                    <Image source={bg} style={styles.bg} />
                    {/* <View style={styles.count}>
                        <Text style={{ fontSize: 25 }} >{this.state.num}</Text>
                    </View> */}
                </TouchableOpacity>

            </View>
        )
    }
}
StartScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    bg: {
        width: width,
        height: height,
        position: 'absolute',
    },
    count: {
        marginLeft: 0.85 * width,
        marginTop: 0.01 * height,
        width: 0.1 * width,
        height: 0.1 * width,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})
export default StartScreen;