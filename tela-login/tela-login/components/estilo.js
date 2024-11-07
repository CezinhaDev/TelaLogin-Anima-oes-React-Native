import {StyleSheet} from "react-native";


const mascara = StyleSheet.create({

  img:{
    width:100,
    height:100,
    borderRadius:20,
  },

  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000',
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:150,
  },

  input:{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom:15,
    color:"#222",
    fontSize:17,
    borderRadius:7,
    padding:10,
  },

  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:"90%",
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },

  submitText:{
    color:"#fff",
    fontSize:18,
  },

  btnRegister:{
    marginTop:10,

  },

  registerText:{
    color:"#fff"
  }
});

export default mascara;
