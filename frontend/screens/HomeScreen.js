import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";


    
export default function HomeScreen(props) {

  return (
    <ScrollView>
        <Text h4 style={{textAlign: 'center'}}>HOMESCREEN</Text>
        <Button
        title = "Go to Results page"
        onPress={() => props.navigation.navigate('Result')}
        />
    </ScrollView>
 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});