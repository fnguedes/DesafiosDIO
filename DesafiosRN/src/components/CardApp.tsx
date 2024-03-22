import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../style/card'
import { useNavigation } from '@react-navigation/native'


export default function CardApp({data}) {

  const navigation= useNavigation()

  return (
    <TouchableOpacity style={[style.view,{backgroundColor:data.color}]} onPress={()=> navigation.navigate(data.nome) }>
      <Image source={data.imagem} style={style.img}/>

      <View style={style.containerTitle}>
        <Text style={[style.title,{color:data.secondColor}]}>{data.titulo}</Text>
      </View>
    </TouchableOpacity>
  )
}