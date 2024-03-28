import { View, Text, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native'
import React from 'react'
import style from '../style/experience'
import ufs from '../../assets/ufs.png'

export default function Experience({exp}) {

  function goProject(){
    if(exp.link){
      Linking.openURL(exp.link)
    }
    else{
      ToastAndroid.show('É apenas informação',ToastAndroid.SHORT)
    }
  }
  
  return (
    <TouchableOpacity style={style.container} onPress={goProject}>
      <View style={style.container1}>
        <View style={[style.containerImg,{backgroundColor:exp.cor?exp.cor:'#fff'}]}>
        <Image source={exp.imagem} style={style.img}/>
        </View>
      </View>

      <View style={style.container2}>
        <Text style={style.title}>{exp.nome}</Text>
        <Text style={style.txt}>{exp.descricao}</Text>
      </View>

      

     
    </TouchableOpacity>
  )
}