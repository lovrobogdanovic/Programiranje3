import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Goalinput from "./components/Goalinput"
import Goalitem from "./components/Goalitem"

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [courseGoal, setCoursGoals] = useState([])

  const addGoalHandler = goalTitle =>{
    setCoursGoals(currentGoals =>[
      ...currentGoals, {id: Math.random().toString, value: goalTitle}
    ])
    
  }

  return (
    <View style={styles.container}>

    <Goalinput 
    onAddGoal ={addGoalHandler}
    
    />

    <FlatList 
    keyExtractor={(item,index) => item.id}
    data={courseGoal}
    renderItem={itemData=> <Goalitem title={itemData.item.value}/>}
    />

    //<Goalitem title="Nesto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },

});
