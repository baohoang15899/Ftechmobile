import React from 'react'
import { View, Text, Image } from 'react-native'
import {style} from './style'
export default function Product({item,type}) {
    return (
        // <View style={type ? style.container : style.containerScroll}>
        <View style={ style.containerScroll}>

            <View style={style.inner}>
                <Image style={style.img} source={item.img}/>
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.price}>{item.price} VNĐ</Text>
            </View>
        </View>
    )
}
