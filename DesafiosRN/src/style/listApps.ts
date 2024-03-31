import { Dimensions, StyleSheet } from "react-native";

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
})