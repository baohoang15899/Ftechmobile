import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {fruit} from '../../Data/index'
import Product from '../../Component/Product'
import Category from '../../Component/Category'
import {style} from './style'
export default function index() {
    return (
        <View style={style.container}>
            <Category name="Our Store"/>
            <View style={style.store}>
                <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{flexGrow:1}} >
                    {fruit.map(item=>{
                        return  <Product key={item.id} item={item}/>
                    })}
                </ScrollView>
            </View>
            <Category name="Best Summer fruits"/>
            <View style={style.summer}>
                {fruit.filter(item => item.status === "best").map(item =>{
                    return  <Product key={item.id}  item={item}/>
                })}
            </View>
        </View>
    )
}
