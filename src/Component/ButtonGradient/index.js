import React from 'react'
import { View, Text,Button, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './Style'
import { useNavigation } from '@react-navigation/native';

const FButtonGradient =({Type,onPress})=> {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress = {onPress}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={Type.color} style={Styles.linearGradient}>
        <Text style={Styles.buttonText}>
            {Type.name}
        </Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}
export default FButtonGradient