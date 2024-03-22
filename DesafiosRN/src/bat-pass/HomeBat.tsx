import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import style from './style/home'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import img from '../../assets/bat-logo.png'
import generate from './service/PasswordGenerate';
import * as Clipboard from 'expo-clipboard';

export default function HomeBat() {

  const [senha, setSenha]= useState('adwqd214')

  function handleGenerate(){
    setSenha(generate)
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(senha);
    ToastAndroid.show('Senha copiada', ToastAndroid.SHORT);
  };

  return (
    <View style={style.view}>
      <View style={style.containerLogo}>
      <Text style={style.titulo}>BAT PASS GENERATOR</Text>

      <Image source={img} style={style.img}/>
      </View>

    <View style={style.containerDados}>
      <View style={style.containerSenha}>
        <Text selectable={true} style={style.senha}>{senha}</Text>
      </View>

      <TouchableOpacity style={style.button} onPress={handleGenerate}>
        <Text style={style.txtButton}>Generate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[style.button,{flexDirection:'row'}]} onPress={copyToClipboard}>
      <MaterialCommunityIcons name="lightning-bolt" size={24} color="#E5BF3C" />
        <Text style={style.txtButton}>Copy</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}