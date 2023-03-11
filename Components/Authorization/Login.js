import React from 'react';
import {View , Text ,TextInput,Button,StyleSheet,ImageBackground} from 'react-native';

export default function Login(){
  return(
    <ImageBackground source={require("../../assets/images/more/BGimage.png") }>
    <View style={styles.container}>
      <View>
      <Text style={{fontSize:25, paddingBottom:20, fontWeight:'bold'}}>Applicant Login</Text>
      </View>
      <View>
      <Text style={{fontSize:20, paddingBottom:15}}>Enter your phone number</Text>
      </View>
      <View>
      <TextInput placeholder=' Enter your phone number' style={styles.input} /><br/>
      <TextInput placeholder=' Password' secureTextEntry={true} style={styles.input}/>
      <Text style={{textAlign:"right", paddingBottom:20,paddingTop:10}}>Forget Password</Text>
      </View>
      <View>
      <Text style={styles.button}>LOGIN</Text>
      </View>
    </View>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  container:{
    paddingTop:80,
    paddingBottom:80,
    paddingLeft:20,
    paddingRight:20,
},
input:{
  fontSize:16,
  borderWidth:2,
  borderRadius:15,
  paddingTop:5,
  paddingBottom:5,
  backgroundColor:'white',

},
button:{
  fontSize:25,
  backgroundColor:"#0080ff",
  borderWidth:3,
  textAlign:'center',
  borderRadius:20,
  
},

})