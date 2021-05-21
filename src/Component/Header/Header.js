import React from 'react'
import { View, Text, Image } from 'react-native'
import avatar from '../../../assets/Img/avatar.jpg'
import { useRoute } from '@react-navigation/native';
import {style} from './Style'
export default function Header() {
    const route = useRoute()
    return (
        <View style={style.container}>
            <Text style={style.text}>{route.params ? route.params.name : "Fruma"}</Text>
            <Image source={avatar} style={style.img} />
        </View>
    )
}

