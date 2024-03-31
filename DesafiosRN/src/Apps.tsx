import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import style from './style/apps'
import Banner from './components/Banner'
import ListApps from './components/ListAppsByCat'
import { DIOapps,DestaqueApps } from './datas/apps'

export default function Home({navigation}) {

 
  

  return (
    <View style={style.view} >
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

      <View style={style.containerCategoria}>
        <Text style={style.categoria}>Digital Innovation One</Text>
      </View>
      <ListApps apps={DIOapps} navigation={navigation}/>
      

    </View>
  )
}