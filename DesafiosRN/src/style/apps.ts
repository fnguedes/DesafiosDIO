import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

const {width}= Dimensions.get('screen')

export default StyleSheet.create({
  containerScreen:{
    flex:1, 
    backgroundColor:colors.background,
  },
  view:{
    alignItems:'center',
    paddingBottom:30
  },
  titulo:{
    height:'5%',
    fontSize:25,
    fontWeight:'700',
    color:colors.titulo,
    marginTop:15
  },
  
  container:{
    width,
    marginVertical:10
  },
  containerScroll:{
    height:260,
    justifyContent:'center',
    alignItems:'center',
  },
  
})