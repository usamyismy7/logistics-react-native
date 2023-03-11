import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import { UserDataContext } from './Context';

export default function Send({navigation}) {
  const obj = useContext(UserDataContext);
  const newObject = {
    display: require('../assets/images/track/b.png'),
    id: 12111,
    address: 'Islamabad, Punjab',
    reach_time: '04:00-09-01-2020',
  };
  function addTrack() {
    obj.addNewTrack(newObject);
    navigation.navigate("Track");
  }
  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Send
      </Text>
      <Text style={{fontSize: 15, marginHorizontal: 8}}>
        Enter the details to send the package
      </Text>
      <br></br>
    </View>
    <View>
      <Text style={styles.text}>Enter Track ID:</Text>
      <TextInput style={styles.input} placeholder="Tracking Number" />
      <Text style={styles.text}>Enter Delivery Address:</Text>
      <TextInput style={styles.input} placeholder="Address" />
      <Text style={styles.text}>Enter Reach Time:</Text>
      <TextInput style={styles.input} placeholder="Format: HH:MM-DD-MM-YEAR" />
      <Pressable style={styles.button} onPress={() => addTrack()}>Submit</Pressable>
    </View>
  </SafeAreaView>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25, 
    marginHorizontal: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'skyblue',
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 15,
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
});