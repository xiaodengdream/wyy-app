import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, RefreshControl } from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
const { width, height } = Dimensions.get('window')
export default class App extends Component {
    constructor() {
        super()
    }
    views() {
        const bg = ['red', 'yellow', 'blue', 'green', 'white', 'black']
        const bu = bg.map((item, index) => {
            return (
                <View key={index} style={{ width: width, height: 0.3 * height, backgroundColor: item }}>
                    <Text>{index}</Text>
                </View>
            )
        })
        return bu

    }
    render() {
        return (
            <ScrollView horizontal={false} pagingEnabled={true} showsHorizontalScrollIndicator={true} scrollEnabled={true}
                refreshControl={<RefreshControl refreshing={false} onRefresh={() => { this.refs.toast.show('hello world!', DURATION.LENGTH_LONG) }} />}
            >
                {this.views()}
                <Toast ref="toast"
                    style={{ backgroundColor: 'red' }}
                    position='top'
                    positionValue={300}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.6}
                    textStyle={{ color: 'white' }}
                    useNativeDriver={false}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
})