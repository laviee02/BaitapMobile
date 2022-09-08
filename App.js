import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.green}>
          <Text>Square 1</Text>
          <StatusBar style="auto" />
      </View>
      <View style={styles.red}>
          <Text>Square 2</Text>
          <StatusBar style="auto" />
      </View>
      <View style={styles.blue}>
          <Text>Square 3</Text>
          <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around' ,
  },

  green: {
    width: 100,
    height: 100,
    backgroundColor: "lightgreen",
    justifyContent: 'center',
    alignItems:'center',
  },

  red: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems:'center',
  },

  blue: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems:'center',
  },
});

// import React, { Component } from 'react';
// import { Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('Hello!')
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color='lightgreen'
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//   },
// });