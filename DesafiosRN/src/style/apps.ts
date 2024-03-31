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
  
  container:{
    width,
    marginVertical:10
  },
  containerScroll:{
    height:260,
    justifyContent:'center',
    alignItems:'center',
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