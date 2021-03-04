import {
    View,
    Text,
    Platform,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';
import React, { Component } from 'react';
import { Geolocation, init } from "react-native-amap-geolocation";
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async dj() {
        if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('1')
                await init({
                    android:'046c0a2b66ed7a4808b62eb0d05fd287',
                });
                console.log('2')
                 this.requestFetchGetList();
            }
        } else {
            this.requestFetchGetList();
        }
    };

    requestFetchGetList = () => {
        if (Platform.OS === "android") {
            return new Promise(() => {
                Geolocation.getCurrentPosition(
                    location => {
                        let getCoordinate = wgs84togcj02(location.coords.longitude, location.coords.latitude);
                        console.log(getCoordinate)
                        // const { pageNum, strName } = this.state;
                        // let params = {
                        //    pageSize: 10,
                        //    strName,
                        //    pageNum,
                        //    lon: getCoordinate[0],
                        //    lat: getCoordinate[1]
                        // }
                        // queryStrList(params).then((res) => {
                        //    if (+res.success === 1) {
                        //       this.arr.push(res.result.pageResult.list)
                        //       this.setState({
                        //          pageNum,
                        //          pages: res.result.pageResult.pages
                        //       })
                        //    }
                        // })
                    },
                    (error) => alert(error.message),
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 });
            })
        } else {
            console.log('ios')
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.dj() }}>
                    <Text>ddddddd</Text>
                </TouchableOpacity>
            </View>
        )
    }
}