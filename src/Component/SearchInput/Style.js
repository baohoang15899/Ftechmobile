import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        marginLeft:3,
        marginRight:3,
        alignItems:'center',
        justifyContent:'space-between',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 22},
        // shadowRadius: 10,
        marginTop:15,
        borderRadius:20,
        backgroundColor:'white',
        elevation:5,
        flex:1
    },
    input:{
        width:'90%',
        color:"#5c4918",
        fontWeight:'700',
        fontSize:14
    }
    
})
