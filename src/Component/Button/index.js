import React from 'react'
import { View, Text,Button,TouchableOpacity } from 'react-native'
import {Styles} from './Style'
import { useNavigation } from '@react-navigation/native';
const FButton =({Name,Status})=> {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={Styles.btn} onPress={() =>Status && navigation.navigate('SignIn')}>
            <Text style={{color:'#00c6ff'}}>{Name}</Text>
        </TouchableOpacity>
    )
}

export default FButton