import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card, Badge } from "react-native-elements";


    
export default function AccountScreen() {

  return (
    <ScrollView>
        <Text h4 style={{textAlign: 'center'}}>ACCOUNTSCREEN</Text>
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
