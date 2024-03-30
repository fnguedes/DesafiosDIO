import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style/skills'
import Badge from './components/Badge'
import { dataSkills } from './datas/dataSkills'

export default function Skills() {



  return (
    <View style={style.view}>
      <Text style={style.titulo}>Habilidades</Text>
      <View style={style.containerMainSkills}>

        <View style={{marginTop:50,alignItems:'center'}}>
        <Text style={style.colocacao}>2º</Text>
        <Badge skill={dataSkills[7]}/>
        </View>
          
        <View>
        <Text style={style.colocacao}>1º</Text>
        <Badge skill={dataSkills[11]}/>
        </View>
  
        <View style={{marginTop:65,alignItems:'center'}}>
          <Text style={style.colocacao}>3º</Text>
          <Badge skill={dataSkills[12]}/>
        </View>
      </View>
      <View style={{flex:1}}>
      <ScrollView contentContainerStyle={style.allSkills}>
        {dataSkills.map((skill,i)=><Badge key={i} skill={skill}/>)}
      </ScrollView>
      </View>
    </View>
  )
}