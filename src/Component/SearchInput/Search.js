import React from 'react'
import { View, Text,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {style}  from './Style'
export default function Search() {
    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholderTextColor = "#5c4918"   placeholder="Search Fruit"/>
            <Icon  name='search' size={20}  color="#5c4918"/>
        </View>
    )
}
    // shadowColor: 'rgba(58,55,55,0.1)',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0,
    // shadowRadius: 15