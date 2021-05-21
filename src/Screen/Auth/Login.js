import React from 'react'
import { View, Text, Image } from 'react-native'
import Logo from '../../../assets/Img/logo.png'
import {Styles,Color} from './Style'
import ButtonGradient from '../../Component/ButtonGradient'
import Button from '../../Component/Button'
import TextContent from '../../Component/Text/index'
import { useNavigation } from '@react-navigation/native';
const Login = ()=> {
    const navigation = useNavigation();
    return (
        <View style = {Styles.container}>
            <View style={Styles.Logo}>
                <Image style={{width:100,height:91,marginBottom:10}} source={Logo}/>
                <Text style={Styles.LogoText}>Evon</Text>
                <Text style={Styles.LogoContent}>Discover upcoming events near you</Text>
            </View>
            <View style={Styles.btnContainer}>
                <ButtonGradient Type={{name:'Sign up',color:Color.Arr}} onPress={()=>navigation.navigate('SignUp')}/>
                <Button Name="Log in" Status={true}/>
                <TextContent content='Skip for now' />
            </View>
        </View>
    )
}

export default Login