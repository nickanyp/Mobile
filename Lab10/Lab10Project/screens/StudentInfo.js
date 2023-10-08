import { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Input } from "react-native-elements";
import firebase from "../database/firebaseDB";

class StudentInfo extends Component {
  constructor() {
    super();

    this.state = {
      stu_id: '',
      name: '',
      gpa: '',
      isLoading: true
    }
  }

  componentDidMount() {
    const dbRef = firebase.firestore().collection('students').doc(this.props.route.params.userKey)
    dbRef.get().then((res) => {
      // ข้อมูลที่เราต้องการมีอยู่ใน doc จริงไหม
      // มีข้อมูล
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          stu_id: user.stu_id,
          name: user.name,
          gpa: user.gpa,
          isLoading: false
        })
        // ไม่มีข้อมูล
      } else {
        console.log('Document does not exist');
      }
    })
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val; //กำหนดค่า property 'prop' ใน state เป็น 'val' (รับค่า input)
    this.setState(state); //setข้อมูลใหม่ไปที่ state
  };

  updateUser() {
    this.setState({
      isLoading: true
    })
    const updateDBRef = firebase.firestore().collection('students').doc(this.state.key)
    updateDBRef.set({
      stu_id: this.state.stu_id,
      name: this.state.name,
      gpa: this.state.gpa
    }). then((docRef) => {
      this.setState({
        key: '',
        stu_id: '',
        name: '',
        gpa: '',
        isLoading: false
      })
      this.props.navigation.navigate('StudentList');
    })
    .catch((err) => {
      console.error('Error', err),
      this.setState({
        isLoading: false
      })
    })
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('students').doc(this.props.route.params.userKey)
    dbRef.delete().then((res) => {
      console.log("Item removed from database");
      this.props.navigation.navigate('StudentList');
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.textinput}>
          <Input placeholder="Student ID" value={this.state.stu_id} onChangeText={(val) => this.inputValueUpdate(val, "stu_id")}></Input>
          <Input placeholder="Student Name" value={this.state.name} onChangeText={(val) => this.inputValueUpdate(val, "name")}></Input>
          <Input placeholder="GPA" value={this.state.gpa} onChangeText={(val) => this.inputValueUpdate(val, "gpa")}></Input>
        </View>
        <View style={{ alignItems: "center"}}>
            <View style={{margin:10, width:300}}>
                <Button title="Update Student Info" onPress={() => this.updateUser()}></Button>
            </View>
            <View style={{width:300}}>
                <Button title="Delete Student" onPress={() => this.deleteUser()}></Button>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textinput: {
    width: 300,
    justifyContent: "center",
    marginTop: '15%',
  },
  preloader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default StudentInfo;