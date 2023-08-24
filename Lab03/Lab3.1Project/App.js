
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import uuid from 'uuid-random'; //id

export default function App() {

  // Data (item)
  const[items, setItems] = useState('');

  // Delete
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  // Update
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  const addItem = () => {
    setItems(prevItems => {
      return [{id:uuid(), text}, ...prevItems];
    })
  }

  // Show
  const ListItem = ({item, deleteItem}) => {
    return (
      <TouchableOpacity style={{padding:15}}>
          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <Text style={{fontSize: 15, padding:10}}>{item.text}</Text>
              <Button title='X' color='firebrick' onPress={() => deleteItem(item.id)}></Button>
          </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>

      <Text style={{fontSize:20, paddingTop: 50}}>สมุดบันทึก</Text>

      <TextInput 
        placeholder='เพิ่มข้อความที่นี่'
        style={styles.input}
        onChangeText={onChange} //กำหนดฟังก์ชัน ซึ่งจะถูกเรียกใช้งานเมื่อข้อความในอินพุตมีการเปลี่ยนแปลง เมื่อข้อความใน TextInput เปลี่ยนแปลง โปรแกรมกำหนดให้เก็บข้อความที่กรอก (input) ในสเตท text
        >
      </TextInput>

      <Button title='บันทึก' onPress={addItem}></Button>

      <FlatList
      data={items} 
      renderItem={({item}) => 
        <ListItem 
          item={item} deleteItem={deleteItem}> 
        </ListItem>}>
      </FlatList>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
  },
  input: {
    borderColor: "gray",
    width: "70%",
    borderWidth: 1,
    padding: 10,
    margin:10
  },
});
