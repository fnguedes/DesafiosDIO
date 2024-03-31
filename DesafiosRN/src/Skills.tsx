import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style/skills'
import Badge from './components/Badge'
import { mainSkills, linguagens, Javascript, Outros } from './datas/dataSkills'
import ListSkills from './components/ListSkills'

export default function Skills() {



  return (
    <View style={style.view}>
      <Text style={style.titulo}>Habilidades</Text>
      <View style={style.containerMainSkills}>

        <View style={{marginTop:50,alignItems:'center'}}>
        <Text style={style.colocacao}>2º</Text>
        <Badge skill={mainSkills[1]}/>
        </View>
          
        <View>
        <Text style={style.colocacao}>1º</Text>
        <Badge skill={mainSkills[0]}/>
        </View>
  
        <View style={{marginTop:65,alignItems:'center'}}>
          <Text style={style.colocacao}>3º</Text>
          <Badge skill={mainSkills[2]}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <ListSkills data={linguagens} titulo="Linguagens"/>
        <ListSkills data={Javascript} titulo="Javascript"/>
        <ListSkills data={Outros} titulo="Gerais"/>
      
      </ScrollView>
    </View>
  )
}