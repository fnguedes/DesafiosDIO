import { View, Text, Image } from 'react-native'
import React from 'react'
import style from '../style/badge'
import RN from '../../assets/Skills/ReactNative.png'

export default function Badge({skill}) {
  return (
    <View style={style.container}>
      <Image source={skill.imagem} style={style.img} resizeMode='contain'/>
      <Text style={style.titulo}>{skill.nome}</Text>
      <Text style={style.tempo}>{skill.tempo} anos de experiência</Text>
    </View>
  )
}