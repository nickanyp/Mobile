import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={{width:180, height:150, resizeMode: 'contain'}} source={require('./assets/IT_Logo.png')}></Image> 
        <Text style={{fontSize: 25, textAlign:'center'}}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{fontSize: 18, textAlign:'center'}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.view2}>
        <View style={{width: 300}}>
          <View style={{paddingBottom: 10}}>
            <Button title='PROGRAMS'></Button>
          </View>
          <View>
            <Button title='ABOUT US'></Button>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});
