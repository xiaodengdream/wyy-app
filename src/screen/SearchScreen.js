import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TextInput,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { width, height } = Dimensions.get('window')
const bg2 = require('../../assest/bg.jpg')
class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: '你好',
            songname: [],
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("https://www.autumnfish.cn/search/?keywords=" + this.state.keywords)
            // fetch(`https://www.autumnfish.cn/search/?keywords=${this.state.songname}`)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    songname: responseData.result.songs
                })
                //console.log(responseData.result.songs)
            })
            .catch((error) => { console.log(error) })

    }
    arr() {
        const aa = this.state.songname.map((item, index) => {
            return (
                <View key={index} style={styles.songlist}>
                    <TouchableOpacity styles={styles.songitem} onPress={() => this.props.navigation.push('Song',
                        { id: item.id, name: item.name, durations: item.duration, key: this.state.keywords, indexs: index }
                    )}>
                        <FontAwesome style={{ position: 'absolute', left: 0.02 * width }} name='play-circle' size={28} color='rgba(0,255,200,1)' />
                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 0.1 * width }}>{item.name}</Text>
                    </TouchableOpacity>

                </View>
            )
        }
        )
        return aa
    }
    changname = (value) => {
        this.fetchData();
        this.setState({
            keywords: value
        })
    }
    render() {

        return (
            <View>
                <Image source={bg2} style={styles.bg2} />
                <ScrollView>

                    <TextInput
                        value={this.state.keywords}
                        placeholder='请输入歌名'
                        returnKeyLabel='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={this.changname}
                    />

                    {this.arr()}
                </ScrollView>
            </View>
        )
    }
}
SearchScreen.navigationOptions = () => {
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
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        marginHorizontal: 0.09 * width,
        marginVertical: 0.01 * height,
        height: 0.06 * height,
        paddingLeft: 20,
    },
    songlist: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 0.005 * height,
        paddingVertical: 0.01 * height,
        backgroundColor: 'rgba(151,255,255,0.3)',
        borderRadius: 20,
        justifyContent: 'center',
    },
    songitem: {
    },
})
export default SearchScreen;