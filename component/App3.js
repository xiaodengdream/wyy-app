import React, { Component, useReducer, useRef } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
    const inputRef = useRef();
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return [...state,
                {
                    id: state.length,
                    name: action.name
                }]
            case 'remove':
                return state.filter( index => index != action.index)

            case 'clear':
                return []
            default:
                return state;

        }
    }
    const [items, dispatch] = useReducer(reducer, [])
    const it = [
        { name: 'de', id: 1 },
        { name: 'g', id: 2 }
    ]

    return (
        <View>

            {/* <Button title='add' onPress={() => dispatch({ type: 'add' })} />
            <Button title='sub' onPress={() => dispatch({ type: 'sub' })} /> */}
            <Button title='add' onPress={() => dispatch({ type: 'add', name: 'deng' })} />
            <Button title='clear' onPress={() => dispatch({ type: 'clear' })} />

            <View>
                {items.map((item, index) => (
                    <Text key={item.id}>{item.id}---{item.name}---{index}
                        <Button title='remove' onpress={() => dispatch({ type: 'remove', index })} />
                    </Text>
                ))}
            </View>
            {/* <View>
                {it.map(item => (
                    <Text key={item.id}>{item.name} </Text>
                ))}
         </View> */}
        </View>
    )
}
export default App;