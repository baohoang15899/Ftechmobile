import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    LogoSignUp:{
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginTop:70,
        marginBottom:40
    },
    Input:{
        flex:1,
        paddingLeft:33,
        paddingRight:33
    },
    Logo:{
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center',
        justifyContent:'center',
        flex:2,
    },
    Decor:{
        flex:1,
        paddingLeft:33,
        paddingRight:33
    },
    LogoText:{
        color:'#232b2b',
        fontSize:24,
        fontWeight:'600',
        textTransform:'uppercase'

    },
    LogoContent:{
        marginTop:30,
        color:'#9e9ea7',
        textAlign:'center',
        fontSize:22,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    btn:{
        alignItems:'center',
        borderWidth:2,
        borderRadius:8,
        borderColor:'#00c6ff',
        padding:12,
        marginTop:15
    },
    linearGradient:{
        borderRadius:8,
    },
    btnContainer:{
        flex:1,
        paddingLeft:33,
        paddingRight:33
    },
    TextStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:33,
        paddingRight:33
    }
})

export const Color = {
    Arr:['#00c6ff', '#0072ff'],
}