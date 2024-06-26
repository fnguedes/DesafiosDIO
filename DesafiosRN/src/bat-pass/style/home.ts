import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#444"
  },
  img:{
    height:240,
    resizeMode:'contain'
  },
  containerLogo:{
    borderWidth:2,
    borderColor:"#fff",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50,
    paddingTop:20
  },
  titulo:{
    fontSize:26,
    fontWeight:'900',
    color:'#E5BF3C'
  },
  containerDados:{
    width:'100%',
    height:180,
    justifyContent:'space-between',
    alignItems:'center'
  },
  containerSenha:{
    width:'80%',
    height:50,
    backgroundColor:"#E5BF3C",
    justifyContent:'center',
    alignItems:'center'
  },
  senha:{
    fontSize:20,
    fontWeight:'700'
  },
  button:{
    width:'80%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'
  },
  txtButton:{
    color:'#E5BF3C',
    fontSize:20,
    fontWeight:'700'
  }
})