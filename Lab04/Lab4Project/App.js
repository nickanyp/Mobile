import React, { useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {


  //correctNumber ใช้เก็บตัวเลขที่เป็นโจทย์ของโปรแกรม โดยกำหนดค่าเริ่มต้นเป็น 0 และอัพเดทค่า state ด้วยฟังก์ชัน setCorrectNumber
  const [correctNumber, setCorrectNumber] = useState(0);
  //guessRound ใช้เก็บจำนวนรอบที่ผู้เล่นเดาตัวเลข โปรแกรม โดยกำหนดค่าเริ่มต้นเป็น 0 และอัพเดทค่า state ด้วยฟังก์ชัน setGuessRounds
  const [guessRounds, setGuessRounds] = useState(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  const configureNewGameHandler = () => {
    //...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ให้เป็น 0
    //...เพิ่มโค้ด...อัพเดทค่าสเตท correctNumber ให้เป็น 0
    setCorrectNumber(0);
    setGuessRounds(0);
  };


  const startGameHandler = (number) => {
    setCorrectNumber(number);
  };

  // ฟังก์ชันสำหรับจัดการการจบเกม
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen answer={correctNumber} onStartGame={startGameHandler} />;


  if (correctNumber > 0 && guessRounds <= 0) {
      content = (
        <GameScreen answer={correctNumber} onGameOver={gameOverHandler}/>
      )
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverScreen
    content = (
      <GameOverScreen rounds={guessRounds} answer={correctNumber} onReStart={configureNewGameHandler} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});