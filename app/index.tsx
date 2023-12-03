import React from "react";
import { StyleSheet, View, Platform, ImageBackground } from "react-native";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors, fontSz, hp, width } from "../utils";
import { Button } from "../components/Button";
import { CustomText } from "../components/Text";
import { nav } from "./_layout";

const Welcome = () => {
  const navigation = useNavigation<nav>();
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      {/* a scroll view to add better feel to the apps experience */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollableContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        {/* this gives the wave background its own definite position - top */}
        <View style={styles.contentViewTop}>
          <ImageBackground
            source={require("../assets/images/Welcome3x.png")}
            style={styles.imageBackground}
          ></ImageBackground>
        </View>
        {/* this gives the texts its own definite position - bottom */}
        <View style={[styles.contentViewBottom]}>
          <View style={[styles.textContainer]}>
            <CustomText
              style={{
                fontWeight: "700",
                fontFamily: "Circular-Std-Bold",
                paddingVertical: hp(5),
              }}
              fontSize={fontSz(50)}
              text={`Live the life you’ve always wanted`}
            />
            <CustomText
              style={{
                fontWeight: "400",
                fontFamily: "Circular-Std-Book",
                paddingVertical: hp(5),
              }}
              fontSize={fontSz(17)}
              text={`Starting today, let’s help you focus better and accomplish your dream life.`}
            />
          </View>
          <View style={[styles.buttonContainer]}>
            <Button
              title={"Get started"}
              onPress={() => {
                navigate("first.step");
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <StatusBar
        backgroundColor={Colors.welcomeBackground}
        style={"dark"}
        hidden={false}
        translucent={false}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollableContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'contain' depending on your preference
  },
  contentViewTop: {
    // flex: 1,
    height: "44.41%",
    width: width,
    backgroundColor: "transparent",
  },
  contentViewBottom: {
    flex: 1,
    height: "55.59%",
    backgroundColor: Colors.white,
    width: width,
    paddingHorizontal: fontSz(24),
  },
  textContainer: {
    flex: 0.75,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.25,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
