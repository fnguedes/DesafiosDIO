import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Badge from './Badge'
import style from '../style/listSkills'
export default function ListSkills({data,titulo}) {
  return (
    <>
    <View style={style.view}>
        <View style={style.containerCategoria}>
          <Text style={style.categoria}>{titulo}</Text>
        </View>
    </View>

        <ScrollView 
        contentContainerStyle={style.allSkills} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        >
          {data.map((skill:any,i:number)=><Badge key={i} skill={skill}/>)}
        </ScrollView>
    </>
      
  )
}