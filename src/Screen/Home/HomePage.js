import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Component/Header/Header'
import {style} from './Style'
import Search from '../../Component/SearchInput/Search'
import Store from '../../Component/Store/index'
export default function HomePage() {

    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header/>
                <Search/>
                <Store/>
            </ScrollView>
        </View> 
    )
}
