import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import style from '../style/card'

interface app{
  nome:string,
  imagem: string,
  color: string,
  secondColor: string,
  titulo: string,
}

export default function CardApp({data:app,navigation}) {
  

  return (
    <View style={style.container}>
      <TouchableOpacity activeOpacity={0.7} style={[style.view,{backgroundColor:app.color,shadowColor:app.secondColor}]} onPress={()=> app.nome? navigation.navigate(app.nome):Linking.openURL(app.link) }>
        <Image source={app.imagem} style={style.img} resizeMode='contain'/>

        
      </TouchableOpacity>
     {/* <View style={{}}> */}
        <Text style={[style.title,{color:app.txtColor,textShadowColor:app.txtColor}]}>{app.titulo}</Text>
      {/* </View>    */}
     
    </View>
  )
}