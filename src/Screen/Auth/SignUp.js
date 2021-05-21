import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, ScrollView,KeyboardAvoidingView } from 'react-native'
import Logo from '../../../assets/Img/logo.png'
import {Styles,Color} from './Style'
import ButtonGradient from '../../Component/ButtonGradient'
import TextInput from '../../Component/TextInput'
import Decor from '../../Component/Decor'
import ButtonIcon from '../../Component/ButtonIcon'
import TextContent from '../../Component/Text/index'
import { useNavigation } from '@react-navigation/native';
import {ValidateEmail,ValidatePass} from '../../Component/Validate'
const SignUp = ()=> {
    const navigation = useNavigation();
    const [email,setEmail] = useState(()=>{
        return ''
    })
    const [pass,setPass] = useState(()=>{
        return ''
    })
    const [name,setName] = useState(()=>{
        return ''
    })


    const handlePress = ()=>{
       if (ValidatePass(pass) && ValidateEmail(email)) {
           navigation.navigate('Home',{name:name})
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
                <TextInput placeholder="Full name"  onChangeText={(text)=>setName(text)} />
                <TextInput placeholder="Email"  onChangeText={(text)=>setEmail(text)}/>
                <TextInput placeholder="Password"  onChangeText={(text)=>setPass(text)} secure={true} Type={true}/>
                <View style={{marginTop:10}}>
                <ButtonGradient Type={{name:'Sign Up',color:Color.Arr}} onPress={handlePress}/>
                </View>
            </View>
            <Decor/>
            <View style={Styles.btnContainer}>
                <ButtonIcon styleIcon={{borderColor:"transparent", backgroundColor:"#395185"}} styleBtn={{backgroundColor:"#4a6ea8",borderColor:"transparent"}} TextColor="#fff" Name="Log In with facebook" icon='F'/>
                <ButtonIcon styleIcon={{borderColor:"#d2d3d9", backgroundColor:"transparent"}} styleBtn={{backgroundColor:"transparent",borderColor:"#d2d3d9"}} TextColor="#b9bbc1" Name="Log In with google" icon='G'/>
            </View>
            <View style={Styles.TextStyle}>
                <Text style={{textAlign:'center',marginTop:20}}>
                    By signing up you accept the <TextContent content="Term of Service"/> and <TextContent content="Privacy Policy"/>
                </Text>
                <Text style={{marginTop:40,marginBottom:20}}>
                    Already have an account ? <Text onPress={()=> navigation.navigate("SignIn")} style={{color:'#00c6ff'}}>Log in</Text>
                </Text>
            </View>
        </ScrollView>
        </View>
    )
}

export default SignUp