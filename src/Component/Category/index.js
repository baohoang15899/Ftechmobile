import React from 'react'
import { View, Text } from 'react-native'
import {style} from './style'
import Arrow from 'react-native-vector-icons/Ionicons';
export default function index({name}) {
    return (
        <View style={style.container}>
            <Text style={[style.text,style.title]}>{name}</Text>
            <View style={style.icon}>
                <Text style={style.text}>More fruit</Text>
                <Arrow name='arrow-forward' size={15}  color="#5c4918"/>
            </View>
        </View>
    )
}
