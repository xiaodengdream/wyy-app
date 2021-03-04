import React,{Component,useEffect,useState,useRef,useReducer} from 'react'
import {Text,View,Button} from 'react-native'
 const App=()=>{
    const [count, setCount] = useState(0);
  
    // const prevCountRef = useRef();
    // useEffect(() => {
    // prevCountRef.current=count
    // console.log(prevCountRef.current,count)
    // })
    const hander=()=>{
      setTimeout(()=>{setCount(count+1)},3000)
      console.log(count)
    }
  
    return (
      <View>
        <Button title='click' onPress={()=>setCount(count+1)}/> 
        <Button title='click' onPress={hander}/> 
        <Text>{count}</Text>
       
      </View>
    )
  }
  export default App;