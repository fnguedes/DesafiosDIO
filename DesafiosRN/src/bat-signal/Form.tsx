import { View, ScrollView, Image, ImageBackground, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style/form'

import batSignal from '../../assets/Apps/bat-signal.png'
import fundo from '../../assets/cidade.jpg'

import Input from './components/Input'

import { useNavigation } from '@react-navigation/native'

export default function Form() {

  const [nome,setNome]=useState()
  const [local,setLocal]=useState()
  const [des,setDesc]=useState()
  const [obs,setObs]=useState()

  const navigation:any=useNavigation()

  return (
    <ImageBackground source={fundo} style={style.view}>
      
    <ScrollView contentContainerStyle={style.scroll}>
      <View style={style.containerImg}>
      <Image source={batSignal} style={style.img}/>
      </View>

      <Input Nome="Nome" setText={setNome} large={false}/>
    <Input Nome="Localização" setText={setLocal} large={false}/>
    <Input Nome="Descrição" setText={setDesc} large={true}/>
    <Input Nome="Observação" setText={setObs} large={true}/>

    <TouchableOpacity 
    style={style.enviar}
    onPress={()=>navigation.goBack()}
    >
      <Text style={style.txtEnviar}>Enviar</Text>
    </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  )
}