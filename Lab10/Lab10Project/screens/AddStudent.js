import React from "react";
import { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class AddStudent extends Component {
  constructor() {
    super();

    this.dbRef = firebase.firestore().collection("students");
    this.state = {
      stu_id: "",
      name: "",
      gpa: "",
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val; //กำหนดค่า property 'prop' ใน state เป็น 'val' (รับค่า input)
    this.setState(state); //setข้อมูลใหม่ไปที่ state
  };

  // บันทึกฐานข้อมูล
  storeUser() {
    if (this.state.name == "") {
      alert("Please provide your information");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          stu_id: this.state.stu_id,
          name: this.state.name,
          gpa: this.state.gpa,
        })
        .then((res) => {
          this.setState({
            stu_id: "",
            name: "",
            gpa: "",
            isLoading: false,
          });
          this.props.navigation.navigate("StudentList");
        })
        .catch((err) => {
          console.log("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    }
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={styles.img}
            source={require("../assets/IT_Logo.png")}
          ></Image>
        </View>
        <View style={styles.textinput}>
            <Input placeholder="Student ID" value={this.state.stu_id} onChangeText={(val) => this.inputValueUpdate(val, "stu_id")}></Input>
            <Input placeholder="Student Name" value={this.state.name} onChangeText={(val) => this.inputValueUpdate(val, "name")}></Input>
            <Input placeholder="GPA" value={this.state.gpa} onChangeText={(val) => this.inputValueUpdate(val, "gpa")}></Input>
        </View>
        <View style={{ alignItems: "center"}}>
            <View style={{margin:10, width:300}}>
                <Button title="Add Student" onPress={() => this.storeUser()}></Button>
            </View>
            <View style={{width:300}}>
                <Button title="View Students" onPress={() => this.props.navigation.navigate("StudentList")}></Button>
            </View>
        </View>
      </View>
    );
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
    margin: 5,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 20,
  },
  // Loading UI
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AddStudent;
