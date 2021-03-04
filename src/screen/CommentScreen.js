import React, { Component, useEffect, useState } from 'react';
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
const { width, height } = Dimensions.get('screen')
const CommentScreen = ({ navigation }) => {
    const ids = navigation.state.params.commentId;
    const [userUrl, setUserUrl] = useState('')
    // useEffect(() =>
    //     fetchData(),
    // );
    const fetchData = () => {
        fetch("https://www.autumnfish.cn/comment/hot?type=0&id=" + ids)
            .then((response) => response.json())
            .then((responseData) => {
                setUserUrl(responseData.hotComments)
                //console.log(responseData.hotComments)
                console.log(userUrl)
            })
            .catch((error) => { console.log(error) })
    }
    const imagelist = () => {
        const list1 = userUrl.map((item, index) => {
            return (
                <View key={index}>
                    {/* <Image source={{ uri: item.user.avatarUrl }} /> */}
                    <Text>{item.user.avatarUrl}</Text>
                </View>
            )

        })
        return list1;
    }
    return (
        <View styles={styles.content}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 0.02 * width,
                paddingHorizontal: 0.01 * width
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name='arrow-left' size={25} color='rgba(0,0,0,1)' />
                </TouchableOpacity>
                <View style={{
                }}>
                    <Text style={{ fontSize: 18, color: 'black', }}>+1800</Text>
                </View>
                <TouchableOpacity style={{ marginLeft: 0.68 * width }} onPress={() => alert(route)}>
                    <SimpleLineIcons name='share-alt' size={25} color='rgba(0,0,0,1)' />
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 0.03 * width }}>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>评论区</Text>
            </View>
            <ScrollView>
                <View>
                    <Text>itemId: {ids}</Text>
                   
                </View>
            </ScrollView>
        </View>
    )
}
CommentScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}
const styles = StyleSheet.create({
    content: {
        ...StyleSheet.absoluteFill,
    }
})
export default CommentScreen;