import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CardApp from './CardApp'
import style from '../style/listApps'

export default function ListAppsByCat({apps,navigation,nome}) {
  return (
    <>
      <View style={style.containerCategoria}>
        <Text style={style.categoria}>{nome}</Text>
      </View>
    <View style={style.container}>
        <ScrollView
        horizontal={true}
        contentContainerStyle={style.containerCard}
        showsHorizontalScrollIndicator={false}
        >
        {apps.map((app:any)=><CardApp navigation={navigation} data={app} key={app.id}/>)}

        </ScrollView>
      </View>
    </>
  )
}