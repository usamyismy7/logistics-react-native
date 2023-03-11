import React ,{useState} from 'react';
import {View , Text ,TextInput,Button,TouchableOpacity,CheckBox,StyleSheet,ImageBackground} from 'react-native';

export default function Signup(){

const [abc,SetAbc]=useState(false);
  return(
    <ImageBackground source={require("../../assets/images/more/BGimage.png")}>
    <View style={styles.container}>
    <View>
    <Text style={{fontSize:25, paddingBottom:20,  fontWeight: "bold",}}>Applicant Registration</Text>
     </View>
     <View>
     <Text style={{fontSize:22, paddingBottom:15}}>Sign Up</Text>
     </View>
     <View>
     <TextInput placeholder=' Enter your phone number' style={styles.input} /> <br/>
     <TextInput placeholder=' ID number' style={styles.input} /> <br/>
     <TextInput placeholder=' Password' secureTextEntry={true} style={styles.input} /> <br/>
     <TextInput placeholder=' Confirm Password' secureTextEntry={true} style={styles.input}/> <br/>
     </View>
     <View style={styles.inline}>
      <CheckBox
       value={abc}
      onValueChange={SetAbc}
      />
       <Text>  I have read the Terms and Conditions</Text>
     </View>
     <View>
     <Text style={styles.button}>SIGN UP </Text>
     </View>
     </View>
      </ImageBackground>
  )
}
const styles=StyleSheet.create({
  inline:{
    flexDirection:'row',
    paddingBottom:20
  },
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