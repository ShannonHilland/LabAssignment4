import React from 'react';
import { 
    View, 
    Text
} from "react-native";
import {useState} from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() : React.JSX.Element {
  const addTask = (taskText: string) => {
    if (taskText === '') {
      return;
    }
    if(list.includes(taskText)) {
      return;
    }
    setList([...list, taskText]);
  };
  const [list, setList] = useState<Array<string>>(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);
  return (
    <View>
      <ToDoList tasks={list}/>
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default App;