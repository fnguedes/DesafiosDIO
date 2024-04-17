import { View, Text } from 'react-native'
import React from 'react'
import {style} from '../styles/garage'
import CardView from '../components/CardView'

export default function GarageScreen() {

  

  return (
    <View style={style.container}>
      <View style={style.cameraBox}>
        <View style={style.triangleCorner}/>
        <View style={[style.triangleCorner,style.topRight]}/>
        <View style={[style.triangleCorner,style.bottomLeft]}/>
        <View style={[style.triangleCorner,style.bottomRight]}/>
        <CardView/>

      </View>
    </View>
  )
}