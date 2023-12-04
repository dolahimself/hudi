import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors, fontSz, hp, width } from "../utils";
import { Button } from "../components/Button";
import { nav } from "./_layout";
import { CustomText } from "../components/Text";
import Quote from "../components/Quote";
import Header from "../components/Header";

const FirstStep = () => {
  const navigation = useNavigation<nav>();
  const { navigate, goBack } = navigation;

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollableContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.contentViewTop}>
          <Header withIcon={false} />
          <CustomText
            style={{
              fontWeight: "700",
              fontFamily: "CircularStd-Medium",
              paddingBottom: hp(40),
            }}
            fontSize={fontSz(30)}
            text={`Take a step towards your dream life`}
          />
          <Quote
            quote={
              "All our dreams can come true, if we have the courage to pursue them."
            }
            author={"Brainy quotes"}
          />

          <CustomText
            style={{
              fontWeight: "400",
              fontFamily: "Circular-Std-Book",
              paddingVertical: Platform.OS === "ios" ? hp(25) : hp(30),
              textAlign: "left",
            }}
            fontSize={fontSz(22)}
            text={`This journey begins with us helping you make small behavioral changes, one day at a time.\n\nWhat habit can you commit to for a start?`}
          />
        </View>
        <View style={[styles.contentViewBottom]}>
          <Button
            title={"Let’s go"}
            onPress={() => {
              navigate("habits");
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <StatusBar
        backgroundColor={Colors.stepBackground}
        style={"dark"}
        hidden={false}
        translucent={false}
      />
    </View>
  );
};

export default FirstStep;

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
  contentViewTop: {
    // flex: 0.9375,
    height: "87%",
    width: width,
    backgroundColor: Colors.stepBackground,
    paddingHorizontal: fontSz(24),
  },
  contentViewBottom: {
    // flex: 0.0625,
    height: "13%",
    width: width,
    backgroundColor: Colors.white,
    paddingHorizontal: fontSz(24),
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
