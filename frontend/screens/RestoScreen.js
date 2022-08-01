import React, {useRef} from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";

// import {BottomSheetModal} from '@gorhom/bottom-sheet';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";


    
export default function RestoScreen(props) {

  // ref
  var bottomSheetRef = useRef<BottomSheetModal>(null);

  const buttonPressed = () => {
    bottomSheetRef.current?.present();
    console.log('pressed')
  }

  return (
    <>
    <ScrollView>
        <Text h4 style={{textAlign: 'center'}}>RESTOSCREEN</Text>
        <Button
        title = "Go to Reservation page"
        onPress={() => props.navigation.navigate('Reservation')}
        />
        <Button
        style = {{marginTop: '50%'}}
        title = "Modal"
        onPress={buttonPressed}
        />
    </ScrollView>
      <BottomSheetModal
        // ref={bottomSheetRef}
        index = {0}
        ref = {ref => (bottomSheetRef = ref)}
        snapPoints={['50%']}
      >
        <View style = {styles.container}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </>
 
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
