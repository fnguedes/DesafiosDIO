import { StyleSheet } from "react-native";
import { colors,fontSize,fontWeight } from "../globalStyles";

export default StyleSheet.create({
  container:{
    width:'40%',
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:colors.buttonSkills,
    marginVertical:10
  },
  txtButton:{
    fontSize:fontSize.small,
    fontWeight:'700',
    color:colors.textoDestaque
  }
})