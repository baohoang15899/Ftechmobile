import { StyleSheet ,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({

    containerScroll:{
        marginTop:10,
        padding:8,
        width:(windowWidth- 30)*0.5,
        // width:'20%'
    },
    img:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop:10,
    },
    name:{
        marginBottom:10,
        fontWeight:'700',
        color:'#5c4918',
    },
    price:{
        color:'#5c4918',
        marginBottom:10,
    },
    inner:{
        alignItems:'center',
        borderRadius:8,
        elevation:5,
        shadowRadius:18,
        backgroundColor:'white',
    }
    
})
