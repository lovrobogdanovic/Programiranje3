import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Goalitem = (props) => {
  return(
  <View style={styles.listitem}>
    <Text>{props.title}</Text>
  </View>
  )
};


const styles = StyleSheet.create({

  

});

export default Goalitem;
