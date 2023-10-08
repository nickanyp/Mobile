import { Component } from "react";
import {
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class StudentList extends Component {
  constructor() {
    super();

    this.firestoreRef = firebase.firestore().collection("students");
    this.state = {
      isLoading: true,
      studentArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  // ลบข้อมูล
  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { stu_id, name, gpa } = res.data();
      all_data.push({
        key: res.id,
        res,
        stu_id,
        name,
        gpa,
      });
    });
    this.setState({
      studentArr: all_data,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {this.state.studentArr.map((item, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                this.props.navigation.navigate("StudentInfo", { userKey: item.key });
              }}
            >
              <ListItem.Content style={{ flex: 3 }}>
                <ListItem.Title>{item.stu_id}</ListItem.Title>
                <ListItem.Subtitle style={{ fontSize: 15, color: "#808080" }}>
                  {item.name}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ fontSize: 15, color: "#808080" }}>
                  {item.gpa}
                </ListItem.Subtitle>
              </ListItem.Content>
              <View style={{ justifyContent: "center" }}>
                <AntDesign name="right" size={15} color="#808080" />
              </View>
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
});

export default StudentList;
