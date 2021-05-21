import React, { useState,useEffect } from 'react'
import { View, Text, TextInput,StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {Value} from '../StateManagement/Wrapper'
import {ACTIONS} from '../StateManagement/Reduer'

const Input = ({placeholder,Type,secure,onChangeText}) => {

    const [hide,setHide] = useState(()=>{
        return secure
    })

    const handlePress = () =>{
        setHide(prev => !prev)
    }


    return (
        <View style={style.input}>
        <TextInput secureTextEntry={hide && true} onChangeText={onChangeText}  style={{width:'90%'}} placeholderTextColor='#bdc2d4' placeholder={placeholder}/>
        {
            Type && 
            <Icon onPress={handlePress} name={hide ? 'eye-off' : 'eye'} size={20} color="#4F8EF7"/>
        }  
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        // padding:5,
        paddingHorizontal:10,
        marginTop:10,
        borderRadius:8,
        backgroundColor:'#e8ebf0',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default Input