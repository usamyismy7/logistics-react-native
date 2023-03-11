import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { UserDataContext } from './Context';

export default function TrackDetail({navigation, route}) {
  const obj = useContext(UserDataContext);
  const index = route.params.person;
  function firstProfile() {
    if(index==null)
      return 0
    else
      return index
  }
  function remove() {
    obj.removeTrack(index);
    navigation.navigate("Track");
  }
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Track Details</Text>
      <Image source={obj.tracks[firstProfile()].display} style={{width: 100, height: 100}} />
      <View style={styles.text}>
        <Text><Text style={{fontWeight: 'bold'}}>Id: </Text>{obj.tracks[firstProfile()].id}</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Address: </Text>{obj.tracks[firstProfile()].address}</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Reach time: </Text>{obj.tracks[firstProfile()].reach_time}</Text>
        <Pressable style={styles.button} onPress={()=>remove()}>
          Remove Tracking Id
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 20,
    color: 'skyblue',
  },
  text: {
    alignItems: 'start',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    color: 'whitesmoke',
    marginVertical: 20,
    padding: 15,
    alignSelf: 'center',
  },
})