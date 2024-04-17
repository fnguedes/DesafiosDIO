import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

const {width} = Dimensions.get("screen")

export default StyleSheet.create({
  container:{
    width,
    marginVertical:10
  },
  containerCard:{
    paddingRight:30,
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingBottom:15
  },
  containerCategoria:{
    width:'90%',
    borderBottomWidth:2,
    borderColor:colors.divisao
  },
  categoria:{
    fontSize:fontSize.medium,
    fontWeight:'700',
    color:colors.textoDestaque
  }
})