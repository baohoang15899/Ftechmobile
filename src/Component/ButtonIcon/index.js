import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'


export default function index({icon,Name,TextColor,styleIcon,styleBtn}) {
    return (
        <View style={style.btn}>
            <View style={[style.icon,styleIcon]}>
            
                <Text style={[style.textIcon,{color:`${TextColor}`}]}>{icon}</Text>
            </View>
            <TouchableOpacity style={[styleBtn,style.buttonText]}>
                <Text  
                style={[style.textBtn,{color: `${TextColor}`}]}>
                        {Name}
                </Text>
            </TouchableOpacity>            
        </View>
    )
}

const style = StyleSheet.create({
    btn:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',

    },
    textIcon:{
        textAlign:'center',
        fontSize:18
    },
    textBtn:{
        fontSize: 18,
        padding:10,
        paddingLeft:25,
    },
    icon:{
        padding:10,
        marginTop:10,
        borderWidth:1,
        justifyContent:'center',width:'15%'

    },
    buttonText: {
        marginTop:10,width:'85%',borderWidth:1
      },
})