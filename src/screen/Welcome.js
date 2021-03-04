import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Send, SlackMessage, InputToolbar, Composer } from 'react-native-gifted-chat'
import Emoji from 'react-native-emoji';
import { Text, View, TextInput, Button, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from "react-native-vector-icons/Fontisto";
import { set } from 'react-native-reanimated';
const WelcomeScreen = () => {
  const [messages, setMessages] = useState([]);
  const [vs, setVs] = useState(false)
  useEffect(() => {
    Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShowHandler = () =>
        setVs(false)
    );

    setMessages([
      {
        _id: 1,
        text: <Text>U+1F927</Text>,
        createdAt: new Date(),
       // image: 'https://placeimg.com/140/140/any',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: <Text><Emoji name="grinning" style={{ fontSize: 20 }} /></Text>,
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'http://25895938.s21i.faiusr.com/4/ABUIABAEGAAgmfnu-QUomuOGoQEwyBA4yBA.png.webp',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    console.log(messages)
  }, []),

  

    renderMessage = (props) => {

      // console.log(props)
    }
  const renderActions = () => {
    return (
      <View style={{ borderRadius: 6, marginLeft: -35, marginBottom: 6 }}>
        <TouchableOpacity style={{ position: 'absolute', width: 20, left: 250, zIndex: 5 }}>
          <Emoji name="grinning" style={{ fontSize: 20 }} />
        </TouchableOpacity>
        <Button title='leave' buttonStyle={{ backgroundColor: '#F1F4FF', borderColor: '#F03CA9', borderWidth: 2, height: 35 }}
          titleStyle={{ color: '#F03CA9', fontSize: 14, lineHeight: 14, fontWeight: 'bold' }}
          onPress={() => {
            alert('leave')
          }} />
      </View>
    )
  }
  return (<>

    <GiftedChat
      messages={messages}
      onInputTextChanged={renderMessage}
      onSend={(e) => { onSend(e) }}
      showUserAvatar={true}
      user={{
        _id: 1,
        avatar: 'http://25895938.s21i.faiusr.com/4/ABUIABAEGAAgmfnu-QUomuOGoQEwyBA4yBA.png.webp',
      }}
      placeholder='请输入消息'
      textInputStyle={{ color: '#000', borderRadius: 8, backgroundColor: '#fff', opacity: 1, lineHeight: 19, paddingHorizontal: 6 }}
      // renderMessageText={renderMessage}
      renderInputToolbar={(props) => {
        return (
          <>
            <InputToolbar {...props} containerStyle={{
              backgroundColor: '#F1F4FF',
              paddingHorizontal: 45,
              paddingVertical: 3,
            }} />
          </>
        )
      }}
      renderActions={renderActions}
      textInputStyle={{ color: '#000', borderRadius: 6, backgroundColor: '#fff', opacity: 1, lineHeight: 19, paddingHorizontal: 6 }}
      renderComposer={(props) => {
        return (
          <Composer {...props} composerHeight={38} />)
      }}
      renderSend={(props) => {
        return (
          <>
            <TouchableOpacity onPress={() => { setVs(!vs), Keyboard.dismiss() }}
              style={{ marginLeft: 8, marginBottom: 8 }}>
              <Fontisto name='smiley' size={25} color='rgba(2,2,2,1)' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setVs(!vs), Keyboard.dismiss() }}
              style={{ marginLeft: 8, marginBottom: 8 }}>
              <Fontisto name='smiley' size={25} color='rgba(2,2,2,1)' />
            </TouchableOpacity>
            <Send
              {...props}
              containerStyle={{ marginLeft: 8, borderRadius: 5, backgroundColor: '#7386EA', marginRight: -40, marginBottom: 3, height: 40, }}
              textStyle={{ color: 'white', fontSize: 15 }}
            />
          </>
        );
      }}
    />
    {vs ?
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
        <TouchableOpacity onPress={()=>
        {
          onSend({
            _id:5,
            text: <View><Emoji name="grinning" style={{ fontSize: 20 }} />
            </View>,
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'http://25895938.s21i.faiusr.com/4/ABUIABAEGAAgmfnu-QUomuOGoQEwyBA4yBA.png.webp',
            },
          },)
        }
      } 
        style={{ marginHorizontal: 15, marginVertical: 5 }}><Text><Emoji name="grinning" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
    
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="grin" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="joy" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="smiley" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="smile" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="sweat_smile" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="innocent" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="smiling_imp" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="wink" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="blush" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="yum" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="relieved" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="heart_eyes" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="sunglasses" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="smirk" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="neutral_face" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="expressionless" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="unamused" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="sweat" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="pensive" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="confused" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="confounded" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="kissing" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15, marginVertical: 6 }}><Text><Emoji name="kissing_heart" style={{ fontSize: 25, }} /></Text></TouchableOpacity>
      </View> : null}
  </>
  )
}
WelcomeScreen.navigationOptions = () => {
  return {
    header: () => false
  }
}
export default WelcomeScreen;