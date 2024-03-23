import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from '../style/input'

export default function Input({setText,Nome,large}) {
  return (
    <View style={style.view}>
    <Text style={style.titulo}>{Nome}</Text>
      <TextInput
        onChangeText={setText}
        style={large?style.largeInput:style.input}
        multiline={large}
        maxLength={100}
      />
    </View>
  )
}