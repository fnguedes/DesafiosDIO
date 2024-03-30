import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../style/card'
import { useNavigation } from '@react-navigation/native'

interface app{
  nome:string,
  imagem: string,
  color: string,
  secondColor: string,
  titulo: string,
}

export default function CardApp({data:app,navigation}) {
  
  return (
    <TouchableOpacity style={[style.view,{backgroundColor:app.color,shadowColor:app.secondColor}]} onPress={()=> navigation.navigate(app.nome) }>
      <Image source={app.imagem} style={style.img}/>

      <View style={style.containerTitle}>
        <Text style={[style.title,{color:app.secondColor}]}>{app.titulo}</Text>
      </View>
    </TouchableOpacity>
  )
}