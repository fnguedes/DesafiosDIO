import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

const {width}= Dimensions.get('screen')

export default StyleSheet.create({
  view:{
    flex:1,
    alignItems:'center',
    backgroundColor:colors.background,
  },
  titulo:{
    height:'5%',
    fontSize:25,
    fontWeight:'700',
    color:colors.titulo,
    marginTop:15
  },
  containerMainSkills:{
    width,
    height:250,
    borderBottomWidth:2,
    flexDirection:'row',
    borderColor:colors.divisao,
    justifyContent:'space-evenly',
  },
  colocacao:{
    fontSize:fontSize.medium,
    color:colors.titulo,
    fontWeight:'bold',
    alignSelf:'center'
  },
  allSkills:{
    paddingHorizontal:'5%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:40
  }
})