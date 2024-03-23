import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import style from './style/home'
import { useNavigation } from '@react-navigation/native'
import batSignal from '../../assets/bat-signal.png'
import fundo from '../../assets/cummulunimbus.jpg'

export default function HomeBatSignal() {

  const navigation:any = useNavigation();
  const [on,setOn]= useState(false)
  
  function turnOn(){
    setOn(!on)
  }

  return (
    <ImageBackground source={fundo} style={style.view} >
      <TouchableOpacity onPress={turnOn} 
      style={[style.containerImg,{backgroundColor:on?"#ff0":"#fff"}]}
      >

      <Image source={batSignal} style={style.img}/>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={[style.button,{backgroundColor: on?'#ff0':null}]} 
      onPress={()=>{on?navigation.navigate('Form'):null}}>
        {on?
          <Text style={style.txtButton}>Fazer Chamado</Text>
          :
          null
          }
      </TouchableOpacity>
      
    </ImageBackground>
  )
}