import { StyleSheet } from "react-native";
import { colors, fontSize } from "../globalStyles";

export default StyleSheet.create({
  container:{
    width:'80%',
    height:80,
    borderRadius:30,
    marginTop:30,
    flexDirection:'row',
    backgroundColor:colors.backgroundBlocos
  },
  container1:{
    width:80,
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  container2:{
    width:'65%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:fontSize.normal,
    color:colors.titulo,
    fontWeight:'700',
    textAlign:'center'
  },
  txt:{
    fontSize:fontSize.small,
    color:colors.texto,
    textAlign:'justify'
  },
  containerImg:{
    height:60,
    width:60,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  img:{
    width:50,
    height:50,
    borderRadius:0,
   
  }
})