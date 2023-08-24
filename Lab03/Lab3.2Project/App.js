import { useState } from "react";
import {
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";

export default function App() {

  const datas = [
    {
      id: 1,
      text: 'Information Technology',
      img: 'https://cdn.discordapp.com/attachments/1050050035435450409/1131482982306283600/course-bach-it.jpg'
    },
    {
      id: 2,
      text: 'Data Science and Business Analytics',
      img: 'https://cdn.discordapp.com/attachments/1050050035435450409/1131482982029467699/course-bach-dsba.jpg'
    },
    {
      id: 3,
      text: 'Business Information Technology \n (International Program)',
      img: 'https://cdn.discordapp.com/attachments/1050050035435450409/1131482981777805383/course-bach-bit.jpg'
    },
    {
      id: 4,
      text: 'Artifical Intelligence Technology',
      img: 'https://cdn.discordapp.com/attachments/1050050035435450409/1131482981379342336/course-bach-ait.jpg'
    },
  ];

  // const AllScroll = ({item}) => {
  //   return (
  //     <View>
  //       <Image
  //         style={{ height: 250 }}
  //         source={{uri : item.img}}>
  //       </Image>
  //       <TouchableOpacity style={styles.button}>
  //         <Text>{datas.text}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  return (
    <View style={{flex:1}}>

        <View style={styles.navbar}>
          <Image
            style={{ width: 66, height: 55 }}
            source={{uri: "https://cdn.discordapp.com/attachments/1050050035435450409/1131467925161771018/IT_Logo.png",}}>
          </Image>
          <Text style={{color: "#1C2C92",fontSize: 35,fontWeight: "bold",marginLeft: 80}}>
            Programs
          </Text>
        </View>

        <FlatList 
          data={datas} //ข้อมูลอะเรย์ ที่ต้องการแสดงผล
          keyExtractor={(item) => item.id} // กำหนดฟังก์ชัน โดยคืนค่ามาเป็นคีย์ที่ไม่ซ้ำกัน (เป็นข้อความ)
          renderItem={({item}) => { // กำหนดฟังก์ชัน โดยคืนค่าเป็นคอมโพเนนต์
            return (
              <View>
                <Image
                  style={{ height: 250 }}
                  source={{uri : item.img}}>
                </Image>
                <TouchableOpacity style={styles.button}>
                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:17}}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            ) // สำหรับแสดงข้อมูลแต่ละรายการใน FlatList
          }}> 
        </FlatList>

    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#ACE6F3",
    flexDirection: "row",
    height: 100,
    padding: 20,
    paddingTop: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
