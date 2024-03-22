import { StyleSheet } from "react-native";
import { colors } from "../globalStyles";

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
})