import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";


export default StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:colors.background,
  },
  titulo:{
    width:'100%',
    textAlign:'center',
    height:'5%',
    fontSize:25,
    fontWeight:'700',
    color:colors.titulo,
    marginTop:15,
  },
  containerMainSkills:{
    width:'100%',
    height:250,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  colocacao:{
    fontSize:fontSize.medium,
    color:colors.titulo,
    fontWeight:'bold',
    alignSelf:'center'
  },
  
})