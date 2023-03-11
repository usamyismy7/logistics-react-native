import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, FlatList, Text, TextInput, Image, Pressable } from 'react-native';
import { UserDataContext } from './Context';

export default function Track({navigation, route}) {
  const obj = useContext(UserDataContext);
  const infoList = obj.tracks;
  
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginHorizontal: 8}}>
          Track
        </Text>
        <Text style={{fontSize: 15, marginHorizontal: 8}}>
          Enter the consignment or tracking number to track the package
        </Text>
        <TextInput style={styles.input} placeholder="Tracking Number" />
      </View>
      <View>
        <Text style={styles.h4}>
          Recently Tracked
        </Text>
        <ScrollView>
          {infoList.map((item, index) => {
          return(
            <Pressable onPress={()=>navigation.navigate("TrackDetail", {person: index})}>
            <View style={styles.item}>
              <View>
                <Image source={item.display} style={{width: 100, height: 100}} />
              </View>
              <View style={{marginHorizontal: 25}}>
                <Text style={{fontWeight: 'bold',fontSize: 20}}>{item.id}</Text>
                <Text>{item.address}</Text>
                <Text style={{fontWeight: 'bold'}}>Will reach at:</Text>
                <Text>{item.reach_time}</Text>
              </View>
            </View>
          </Pressable>
          )
      })}
        </ScrollView>
      </View>
    </ScrollView>
  </SafeAreaView>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  item: {
    backgroundColor: 'skyblue',
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    borderWidth: 2,
    borderColor: 'skyblue',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  h4: {
    fontWeight: 'bold', 
    padding: 10,
    color: 'grey',
    fontSize: 15,
  },
});