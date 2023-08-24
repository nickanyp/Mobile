import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1_1}>
          <Image style={{height: 75, width: 75, resizeMode: 'contain', margin: 5}} source={require('./image/IT_logo.png')}></Image>
        </View>
        <View style={styles.view1_2}>
          <Text style={{fontSize: 45,fontWeight: 'bold', color: '#1C2C92'}}>Programs</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <ScrollView>
          <Image style={styles.imgstyles} source={require('./image/course-bach-it.jpg')}></Image>
          <TouchableOpacity style={styles.button}>
            <Text>Information Technology</Text>
          </TouchableOpacity>
          <Image style={styles.imgstyles} source={require('./image/course-bach-dsba.jpg')}></Image>
          <TouchableOpacity style={styles.button}>
            <Text>Data Science and Business Analysis</Text>
          </TouchableOpacity>
          <Image style={styles.imgstyles} source={require('./image/course-bach-bit.jpg')}></Image>
          <TouchableOpacity style={styles.button}>
            <Text>Business Information Technology <br></br> (Information Program)</Text>
          </TouchableOpacity>
          <Image style={styles.imgstyles} source={require('./image/course-bach-ait.jpg')}></Image>
          <TouchableOpacity style={styles.button}>
            <Text>Artificial Intelligence Technology</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ACE6F3',
    alignItems: 'center', 
    justifyContent:'center',
    width: '100%'
  },
  view2: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#CFCFCF',
    alignItems: 'center', 
    justifyContent:'center',
    width: '100%',
  },
  view1_1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  view1_2: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  imgstyles: {
    height: 250, 
    width: 600, 
    resizeMode: 'contain'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
