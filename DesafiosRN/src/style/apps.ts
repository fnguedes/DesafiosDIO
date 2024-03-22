import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../globalStyles";

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
  containerCard:{
    width,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:"8%",
  }
})