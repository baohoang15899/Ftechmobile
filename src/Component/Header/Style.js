import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
    },
    text:{
        fontSize:18,
        color:'#5c4918',
        fontWeight:"700",
    },
    img:{
        width:30,
        height:30,
        borderRadius:50
    }
})