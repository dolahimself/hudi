import React from "react";
import { StyleSheet, Image, View, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "expo-router";
import { ASPECT_RATIO, fontSz, hp } from "../utils";
import { CustomPressable } from "./Button";
import { nav } from "../app/_layout";
import { CustomText } from "./Text";

const Header = ({
  withIcon,
  title,
  style,
}: {
  withIcon: boolean;
  title?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const navigation = useNavigation<nav>();
  const { goBack } = navigation;

  switch (withIcon) {
    case false:
      return (
        <View style={[styles.headerContainer, style]}>
          <CustomPressable
            activeOpacity={0.75}
            onPress={() => {
              goBack();
            }}
          >
            <Image
              source={require("../assets/images/leftarrow3x.png")}
              style={styles.leftarrow}
            />
          </CustomPressable>
        </View>
      );
    case true:
      return (
        <View style={[styles.headerContainer, style]}>
          <CustomPressable activeOpacity={0.75} onPress={() => {}}>
            <CustomText
              style={{
                fontWeight: "500",
                fontFamily: "CircularStd-Medium",
                paddingVertical: hp(5),
              }}
              fontSize={fontSz(30)}
              text={`${title}`}
            />
          </CustomPressable>
        </View>
      );

    default:
      break;
  }
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: hp(50),
  },
  leftarrow: {
    width: hp(15 * ASPECT_RATIO),
    height: hp(15),
  },
});
