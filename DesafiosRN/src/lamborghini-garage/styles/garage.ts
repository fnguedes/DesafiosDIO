import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1E1E20',
  },
  cameraBox:{
    width:350,
    height:'90%',
    borderWidth:0.5,
    overflow:"hidden",
    borderColor:"#fff",
    borderRadius:10,
  },
  triangleCorner:{
    position:'absolute',
    borderStyle:'solid',
    width:0,
    height:0,
    borderTopWidth:20,
    borderTopColor:'#fff',
    borderRightWidth:20,
    borderRightColor:'transparent'
  },
  topRight:{
    right:0,
    transform:[{
      rotate:'90deg'
    }]
  },
  bottomLeft:{
    bottom:0,
    left:0,
    transform:[{
      rotate:'-90deg'
    }]
  },
  bottomRight:{
    bottom:0,
    right:0,
    transform:[{
      rotate:'180deg'
    }]
  }
})