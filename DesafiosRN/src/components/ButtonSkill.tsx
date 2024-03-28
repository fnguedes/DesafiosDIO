import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../style/buttonSkill'
export default function ButtonSkill({skill}) {

  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.txtButton}>{skill}</Text>
    </TouchableOpacity>
  )
}