import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style/profile'
import perfil from '../assets/PerfilAtual.jpeg'

import Experience from './components/Experience'
import ButtonSkill from './components/ButtonSkill'
import { experiences } from './experiences'

import { MaterialCommunityIcons,FontAwesome,AntDesign,Zocial  } from '@expo/vector-icons';

export default function Profile() {

  const skills=[
    'React Native','Javascript','Typescript', 'React'
  ] 

  const github='https://github.com/fnguedes'
  const Linkedin='https://www.linkedin.com/in/fellipe-nascimento-guedes-/'
  const Email='mailto:fngprogrammer@hotmail.com'


  const date = new Date();
  let idade:number

  if(date.getMonth()==4 && date.getDate()>=20){
    idade= date.getFullYear()-2000
  }else{
    idade= date.getFullYear()-2001
  }

  return (
    <View style={style.view}>

      <View style={style.containerDadosGeral}>
        <View style={style.containerImg}>
          <Image source={perfil} style={style.img}/>

          <View style={style.containerContacts}>
            <Text style={style.subTitle}>Contatos</Text>

            <TouchableOpacity onPress={()=>Linking.openURL(Linkedin)} style={style.containerContact}>
              <FontAwesome name="linkedin-square" size={28} color="#0A66C2" />
              <Text  style={style.txtContato}>
                Linkedin
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>Linking.openURL(github)} style={style.containerContact}>
              <AntDesign name="github" size={24} color="#fff" />
              <Text  style={style.txtContato}>
                Github
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>Linking.openURL(Email)} style={style.containerContact}>
              <Zocial name="email" size={24} color="#0A66C2" />
              <Text  style={style.txtContato}>
                Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={style.containerDados}>
          <Text style={style.titulo}>Fellipe Nascimento Guedes</Text>
          
          <View style={style.containerLista}>
            <View style={style.containerDadosLista}>

              <View style={style.personalDatas}>

                <View style={style.containerDefault}>
                  <MaterialCommunityIcons name="gender-male-female" size={24} color="#149ECA" />
                  <Text style={style.txt}>Masculino</Text>
                </View>

              </View>

              <View style={style.personalDatas}>

                <View style={style.containerDefault}>
                  <FontAwesome name="birthday-cake" size={22} color="#E34D61" />
                  <Text style={style.txt}>{idade} anos</Text>
                </View>

              </View>
            </View>

            <View style={style.containerDefault}>
              <FontAwesome name="suitcase" size={22} color="#5dc460" />
              <Text style={style.txt}>Programador Full-Stack</Text>
            </View>
          </View>

            <Text style={style.subTitle}>Habilidades Principais</Text>
              <View style={style.containerListaSkills}>
                {skills.map((skill,i)=><ButtonSkill key={i} skill={skill}/>)}
              </View>
            
              
        </View>

      </View>

      <View style={style.linha}/>
        <Text style={style.tituloExp}>Experiência</Text>
      <ScrollView contentContainerStyle={style.containerExp} showsVerticalScrollIndicator={false}>
        {experiences.map((exp,i)=><Experience key={i} exp={exp}/>)}


      </ScrollView>
    </View>
  )
}