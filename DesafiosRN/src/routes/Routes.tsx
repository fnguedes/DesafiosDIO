import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../globalStyles';

import Apps from '../Apps';
import Skills from '../Skills';
import Profile from '../Profile';

import HomeBat from '../bat-pass/HomeBatPass';

import HomeBatSignal from '../bat-signal/HomeBatSignal';
import Form from '../bat-signal/Form';

import Lamborghini from '../lamborghini-garage/app/GarageScreen';

import Camera from '../capturaDeVideo/Home'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Home Bat" component={HomeBat} />
      <Stack.Screen name="Home Bat Signal" component={HomeBatSignal} />
      <Stack.Screen name="Lamborghini" component={Lamborghini} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false, 
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:colors.tabBarColor,
        borderColor:colors.tabBarColor,
        borderWidth:1,
        }
      }} initialRouteName='Perfil'>
      <Tab.Screen name="Apps" component={Apps} 
        options={{
          tabBarIcon:({focused})=><MaterialCommunityIcons name="apps" size={40} color={focused?colors.botaoAtivo:colors.botaoInativo} />
        }}
      />
      
      <Tab.Screen name="Perfil" component={Profile} 
      options={{
        tabBarIcon:({focused})=><Ionicons name="person-sharp" size={30} color={focused?colors.botaoAtivo:colors.botaoInativo} />
      }}
      />

      <Tab.Screen name="Habilidades" component={Skills} 
        options={{
          tabBarIcon:({focused})=><Ionicons name="code-slash" size={35} color={focused?colors.botaoAtivo:colors.botaoInativo} />
        }}
      />
    </Tab.Navigator>
  );
}