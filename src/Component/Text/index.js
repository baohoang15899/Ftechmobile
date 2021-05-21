import React from 'react'
import { Text,StyleSheet } from 'react-native'

const TextContent = ({content}) => {
    return (
        <Text style={style.text}>{content}</Text>
    )
}

const style = StyleSheet.create({
    text:{
        textAlign:'center',
        marginTop:35,
        fontSize:14,
        color:'#00c6ff'
    }
})


export default TextContent
