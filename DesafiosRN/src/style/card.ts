import { StyleSheet } from "react-native";


export default StyleSheet.create({
  view:{
    width:130,
    height:130,
    borderRadius:20,
    marginTop:30,
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacity:0.6,
    shadowRadius:4,
    elevation:10
  },
  img:{
    width:'100%',
    height:'80%',
  },
  containerTitle:{
    width:"100%",
    height:'20%',
    alignItems:'center',
    justifyContent:'center'

  },
  title:{
    fontSize:18,
    fontWeight:'600',
  }
})