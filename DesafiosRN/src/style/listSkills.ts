import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

const {width}= Dimensions.get('screen')

export default StyleSheet.create({
  view:{
    width,
    paddingHorizontal:'5%'
  },
  allSkills:{
    height:150,
    flexDirection:'row',
    paddingBottom:40
  },
  containerCategoria:{
    width:'100%',
    borderBottomWidth:2,
    borderColor:colors.divisao,
    marginTop:20
  },
  categoria:{
    fontSize:fontSize.medium,
    fontWeight:'700',
    color:colors.textoDestaque
  }
})