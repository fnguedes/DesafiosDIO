import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import style from './style/apps'
import Banner from './components/Banner'
import ListApps from './components/ListAppsByCat'
import { DIOapps,DestaqueApps,Rocketseat } from './datas/apps'

export default function Home({navigation}) {

 
  

  return (
    <View style={style.containerScreen}>
    <ScrollView contentContainerStyle={style.view} showsVerticalScrollIndicator={false}>
      <Text style={style.titulo}>Meus Apps</Text>
      <View style={style.container}>

        <ScrollView 
        contentContainerStyle={style.containerScroll} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        >
          {DestaqueApps.map((app,i)=><Banner key={i} app={app}/>)}
        </ScrollView>
        

      </View>

      
      <ListApps apps={Rocketseat} navigation={navigation} nome='Rocketseat'/>
      
      <ListApps apps={DIOapps} navigation={navigation} nome='Digital Innovation One' />
      

    </ScrollView>
    </View>
  )
}