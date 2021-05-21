import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Logo from '../../../assets/Img/logo.png'
import {Styles,Color} from './Style'
import ButtonGradient from '../../Component/ButtonGradient'
import TextInput from '../../Component/TextInput'
import Decor from '../../Component/Decor'
import ButtonIcon from '../../Component/ButtonIcon'
import TextContent from '../../Component/Text/index'
import { useNavigation } from '@react-navigation/native';
import {ValidateEmail,ValidatePass} from '../../Component/Validate'
const SignIn = ()=> {
    const navigation = useNavigation();
    const [email,setEmail] = useState(()=>{
        return ''
    })
    const [pass,setPass] = useState(()=>{
        return ''
    })


    const handlePress = ()=>{
       if (ValidatePass(pass) && ValidateEmail(email)) {
           navigation.navigate('Home')
       }
       else{
           alert("Invalid Email or Password")
       }
    }

    return (
        <View style = {Styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1}} >
            <View style={Styles.LogoSignUp}>
                <Image style={{width:100,height:91,marginBottom:10}} source={Logo}/>
            </View>
            <View style={Styles.Input}>
                <TextInput placeholder="Email"  onChangeText={(text)=>setEmail(text)}/>
                <TextInput placeholder="Password"  onChangeText={(text)=>setPass(text)} secure={true} Type={true}/>
                <View style={{marginTop:10}}>
                <ButtonGradient Type={{name:'Log In',color:Color.Arr}} onPress={handlePress}/>
                </View>
            </View>
            <View style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        paddingLeft:33,
                        paddingRight:33,
                        marginBottom:10
                        }}>
                <TextContent content="Forgot Password"/>
            </View>
            <Decor/>
            <View style={Styles.btnContainer}>
                <ButtonIcon  styleIcon={{borderColor:"transparent", backgroundColor:"#395185"}} styleBtn={{backgroundColor:"#4a6ea8",borderColor:"transparent"}} TextColor="#fff" Name="Log In with facebook" icon='F'/>
                <ButtonIcon styleIcon={{borderColor:"#d2d3d9", backgroundColor:"transparent"}}styleBtn={{backgroundColor:"transparent",borderColor:"#d2d3d9"}} TextColor="#b9bbc1" Name="Log In with google" icon='G'/>
            </View>
            <View style={Styles.TextStyle}>
                <Text style={{marginTop:40,marginBottom:20}}>
                    Don't have an account ? <Text onPress={()=> navigation.navigate('SignUp')} style={{color:'#00c6ff'}}>Sign Up</Text>
                </Text>
            </View>
        </ScrollView>
        </View>
    )
}

export default SignIn