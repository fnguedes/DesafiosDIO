import { Dimensions, StyleSheet } from "react-native";
import { fontSize } from "../globalStyles";

  const {width}= Dimensions.get("screen")

export default StyleSheet.create({
  
  banner:{
    width,
    height:'100%',
    justifyContent:'space-between'
  },
  container1:{
    justifyContent:'space-evenly',
    flexDirection:"row"
  },
  containerTitle:{
    width:120,
    height:'95%',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  title:{
    fontSize:fontSize.medium,
    fontWeight:'700',
    textAlign:'center',
    marginTop:10
  },
  containerImg:{
    width:110,
    height:110,
    borderRadius:90,
    alignItems:"center",
    justifyContent:'center',
  },
  img:{
    width:100,
    height:100
  },
  containerSlogan:{
    width,
    alignItems:"center"
  },
  slogan:{
    fontSize:fontSize.normal,
    textAlign:'center'
  },
  imgApp:{
    width:100,
    height:200
  }

})