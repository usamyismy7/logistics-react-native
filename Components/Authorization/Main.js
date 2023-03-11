import React from 'react';
import {View , Text ,Button,StyleSheet,Image,ImageBackground, Pressable} from 'react-native';

export default function Main({navigation}) {
  return (
    <ImageBackground source={require("../../assets/images/more/BGimage.png")}>
    <View style={styles.container}>
    
      <View style={{flexDirection:'row', paddingBottom:25}}>
      <Image source={require("../../assets/images/more/Cargo.png")} style={{height:40 , width:50}}/>
    <Text style={styles.container1}>GoCargo Logistics</Text>
      </View>
      <View>
    <Text style={{fontSize:20,paddingBottom:20}}>Welcome to GoCargo Logistics</Text>
      </View>
      <View style={{alignItems:'center',paddingBottom:15}}>
        <Pressable style={styles.button1} onPress={()=>navigation.navigate("Login")} >Login as Courier</Pressable>
        <br/>
        <Pressable style={styles.button2} onPress={()=>navigation.navigate("Login")} >Login as Applicant</Pressable>
      </View>
      <View>
    <Text style={{paddingBottom:10,fontSize:13}}>By logging in, you agree to our Privacy Policy</Text>
    <Text style={styles.container2}>Want to be Courier?</Text>
    <Pressable style={{textAlign:'center'}} onPress={()=>navigation.navigate("Signup")} >Apply here</Pressable>
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
    paddingRight:20
},
container1:{
  fontSize:28,

    },
button1:{
  fontSize:20,
  backgroundColor:"#f4f5f0",
  borderWidth:2,
  borderRadius:20,
  paddingLeft:50,
  paddingRight:50,

},
button2:{
  fontSize:20,
  backgroundColor:"#f4f5f0",
  borderWidth:2,
  borderRadius:20,
  paddingLeft:40,
  paddingRight:40,

},
container2:{
  fontSize:20,
  paddingBottom:10,
  textAlign:'center'
}
}
)