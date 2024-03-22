import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import CardApp from './components/CardApp'
import style from './style/apps'
import batImg from '../assets/bat-logo.png'
export default function Home() {

  const apps=[
    {id:1,titulo:'Bat Pass',imagem:batImg,color:'#000',secondColor:'#ff0',nome:'Home Bat'}
  ]

  return (
    <View style={style.view} >
      <Text style={style.titulo}>Meus Apps</Text>

      <ScrollView contentContainerStyle={style.containerCard} showsVerticalScrollIndicator={false}>
      {apps.map((app)=><CardApp data={app} key={app.id}/>)}
      </ScrollView>
    </View>
  )
}