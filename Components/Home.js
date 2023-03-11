import React, { useContext } from 'react';
import { View, ImageBackground, StatusBar, Text, StyleSheet, Pressable, Button } from 'react-native';
import Track from './Track';
import Send from './Send';
import { UserDataContext } from './Context';

const image = require('../assets/images/home/a.jpg');
export default function Home({navigation}) {
return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.header}>
          <StatusBar animated={true} backgroundColor="#61dafb"/>
          <Text style={styles.title}>
            GoCargo
          </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.h3}>
          Hello Mike
        </Text>
        <Text style={styles.p}>
          You can send a new package or track the one which you or your friend have sent.
        </Text>
        <Pressable style={styles.button} onPress={()=>navigation.navigate('Track')}>Track Package</Pressable>
        <Pressable style={styles.button} onPress={()=>navigation.navigate('Send')}>Send Package</Pressable>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    width: '100%',
    height: '60%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'rgb(31,117,254)',
    fontWeight: 'bold',
    fontSize: 25,
  },
  footer: {
    width: '100%',
    height: '40%',
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(31,117,254)',
    marginHorizontal: 20,
  },
  p: {
    fontSize: 14,
    marginHorizontal: 20,
  },
  button: {
    color: 'whitesmoke',
    backgroundColor: 'rgb(30,144,255)',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 5,
  },  
})