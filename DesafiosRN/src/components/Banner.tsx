import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native'
import React from 'react'
import style from '../style/banner'

export default function Banner({app}) {

  const goApp=async()=>{
    if(app.link){
    const supported = await Linking.canOpenURL(app.link);
    if (supported) {
      Linking.openURL(app.link)
    }else{
      ToastAndroid.show('Link indisponível',ToastAndroid.SHORT)
    }
  }else{
    ToastAndroid.show('Link indisponível',ToastAndroid.SHORT)
  }
  }

  return (
   
    <TouchableOpacity style={[style.banner]} onPress={goApp}>
      <View style={style.container1}>
        <View style={style.containerTitle}>

          <View style={[style.containerImg,{backgroundColor:app.corFundo}]}>
            <Image source={app.logo} style={style.img}/>
          </View>

          <Text style={[style.title,{color:app.corTexto}]}>{app.nome}</Text>
        </View>

        <Image source={app.imagem1} style={style.imgApp}/>
        <Image source={app.imagem2} style={style.imgApp}/>
      </View>
        
      <View style={style.containerSlogan}>
        <Text style={[style.slogan,{color:app.corTexto}]}>{app.slogan}</Text>
      </View>
    </TouchableOpacity>
  )
}