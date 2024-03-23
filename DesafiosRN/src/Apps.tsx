import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import CardApp from './components/CardApp'
import style from './style/apps'
import batPass from '../assets/bat-logo.png'
import batSignal from '../assets/bat-signal.png'

export default function Home({navigation}) {

  const apps=[
    {id:1,titulo:'Bat Pass',imagem:batPass,color:'#000',secondColor:'#E5BF3C',nome:'Home Bat'},
    {id:2,titulo:'Bat Signal',imagem:batSignal,color:'#fff',secondColor:'#000',nome:'Home Bat Signal'}
  ]

  return (
    <View style={style.view} >
      <Text style={style.titulo}>Meus Apps</Text>

      <ScrollView contentContainerStyle={style.containerCard} showsVerticalScrollIndicator={false}>
      {apps.map((app)=><CardApp navigation={navigation} data={app} key={app.id}/>)}
      </ScrollView>
    </View>
  )
}