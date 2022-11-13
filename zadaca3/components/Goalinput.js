import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button,  } from 'react-native';

const Goalinput = (props) => {

  const [enteredGoal, setEnteredGoal] = useState("");

  const goalinputHandler= enteredText => (
    setEnteredGoal(enteredText)
  )



return(

<View style={styles.container}> 

<TextInput
placeholder="Enter list item"
style={styles.listitem}
onChangeText={goalinputHandler}
value={enteredGoal}
 />


<Button title="Add" 
onPress={props.onAddGoal.bind(this, enteredGoal)}
/>

</View>




)

};

const styles = StyleSheet.create({});

export default Goalinput;