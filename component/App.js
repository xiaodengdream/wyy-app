import React, { Component } from 'react'
import { StyleSheet, View, PanResponder, Text, Dimensions } from 'react-native'

const roundSize = 25  // 圆的大小
const width = Dimensions.get('window').width // 设备宽度
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      start: 18, // 起始坐标
      end: width - roundSize-80, // 结束坐标
      range: 100,  // 最大价格
      endPrice: 80,  // 结束价格
      startPrice: 18 // 起始价格
    }
  }

  componentWillMount() {
    this.panResponderStart = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.forceUpdate()
      },
      onPanResponderMove: (evt, gestureState) => { // 开始的拖动事件
        let { end, range } = this.state
        let start = gestureState.moveX // 当前拖动所在的坐标
        if (start < 50) {  // 到起始阀值，置为0
          start = 0
        }
        if (end < start) {  // 保证开始价格不会超过结束价格
          start = end - roundSize
        }
        if(start > width) { // 保证开始价格不会超过最大值
          start = width
        }
        let startPrice = Math.floor(start / width * range) // 计算开始价格显示值
        if (start === 0) { 
          startPrice = 0
        }
        this.setState({
          start,
          startPrice
        })
      },
      onPanResponderRelease: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => true,
    })
    this.panResponderEnd = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.forceUpdate()
      },
      onPanResponderMove: (evt, gestureState) => { // 结束的拖动事件
        let { start, range } = this.state
        let end = gestureState.moveX
        if (end < start) {
          end = start + 30
        }
        if(end > width - roundSize) {
          end = width - roundSize
        }
        let endPrice = Math.floor(end / (width - roundSize) * range) > range - 1 ? '不限' : Math.floor(end / (width - roundSize) * range)
        this.setState({
          end,
          endPrice
        })
      },
      onPanResponderRelease: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => true,
    })
  }

  render() {
    let { start, end, range, startPrice, endPrice } = this.state
    return (
      <View style={styles.container}>
        <View style={[{ position: 'absolute' }, { left: start }, { top: -3 }]}><Text>{startPrice}</Text></View>
        <View style={[{ position: 'absolute' }, { left: end }, { top: -3 }]}><Text>{endPrice !== '不限' ? `${endPrice}` : endPrice}</Text></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.progressContainer, { backgroundColor: '#eee' }, { width: start }]}></View>
          <View style={[styles.progressContainer, { width: width - start - (width - end) }]}></View>
          <View style={[styles.progressContainer, { backgroundColor: '#eee' }, { width: width - end }]}></View>
        </View>
        <View style={[styles.circle, { left: start }]} {...this.panResponderStart.panHandlers}>
        </View>
        <View style={[styles.circle, { left: end }]} {...this.panResponderEnd.panHandlers}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  progressContainer: {
    backgroundColor: '#105eae',
    height: 4
  },
  circle: {
    position: 'absolute',
    width: roundSize,
    height: roundSize,
    borderRadius: roundSize / 2,
    borderColor: '#eee',
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowRadius: 5,
    shadowOpacity: 0.9,
    backgroundColor: 'pink',
  }
})