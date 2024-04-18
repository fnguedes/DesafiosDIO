import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import logo from '../../../../assets/Apps/logoLB.png'
import { CAR_ASSETS_BASE_URL } from '../../constantes/car'
import {AntDesign} from '@expo/vector-icons'
import { CarModel } from './props'
import { handleNextItem, handlePreviousItem, loadCarData } from './action'

export default function CardView() {

  const [carData,setCarData]= useState<CarModel | null>()
  const [car,setCar]= useState(1)

  useEffect(()=>{
    (async()=>{
      await loadCarData(1,setCarData)
    })()
  },[])

  const renderLogoBox = () => (
      <View style={style.logoContainer}>
        <Image source={logo} style={style.imgLogo}/>
      </View>
  )

  const renderCarDetails = ()=> (
    <View style={style.containerDetails}>
      <Text style={style.carBrand}>Lamborghini</Text>
      <Text style={style.carModel}>{carData?.carName}</Text>
    </View>
  )

  const renderCarImage = ()=>(
    <Image
      style={style.img}
      source={{uri:`${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
      resizeMode='contain'
    />
  )

  const renderButtonBuyCar = () => (
    <View style={style.containerButton}>
      <TouchableOpacity style={style.button}>
        <AntDesign name='shoppingcart' size={20} color="#fff"/>
        <Text style={style.txtButton}>Buy</Text>
      </TouchableOpacity>
    </View>
  )

  function changeCar(aumenta:boolean){
    if(aumenta && car<10){
      setCar(car+1)
    }else if(!aumenta && car>1){
      setCar(car-1)
    }
  }

  const renderPriceControls = () => (
    <View style={style.containerPrice}>
      <Button title="<" color="#01A6B3" onPress={()=>handlePreviousItem(carData,setCarData)}/>
      <Text style={style.price}>{carData?.price}</Text>
      <Button title=">" color="#01A6B3" onPress={()=>handleNextItem(carData,setCarData)}/>
    </View>
  )

  return (
    <View style={style.imgContainer}>
      {renderLogoBox()}
      <View style={style.divider}/>
      {renderCarDetails()}
      {renderCarImage()}
      <View style={style.divider}/>
      {renderButtonBuyCar()}
      {renderPriceControls()}
    </View>
  )
}