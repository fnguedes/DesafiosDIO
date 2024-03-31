import { StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

export default StyleSheet.create({
  container:{
    width:100,
    height:120,
    alignItems:'center',
    marginBottom:40,
    marginHorizontal:7
  },
  img:{
    width:60,
    height:80
  },
  titulo:{
    color:colors.titulo,
    fontSize:fontSize.normal,
    fontWeight:'700'
  },
  tempo:{
    color:colors.texto,
    fontSize:fontSize.small,
    fontWeight:'500',
    textAlign:'center'
  }
})