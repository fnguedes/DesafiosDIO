import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container:{
    alignItems:'center',
    marginHorizontal:20,
  },
  view:{
    width:80,
    height:80,
    borderRadius:1000,
    marginTop:30,
    marginBottom:15,
    shadowOffset:{
      width:5,
      height:5
    },
    shadowRadius:4,
    elevation:10,
    justifyContent:'center',
    alignItems:"center"
  },
  img:{
    width:'90%',
    height:'75%',
  },
  containerTitle:{
    width:"100%",
    height:'20%',
    alignItems:'center',
    justifyContent:'center',

  },
  title:{
    fontSize:18,
    fontWeight:'600',
    textShadowOffset:{width:0,height:2},
    textShadowRadius:5,
  }
})