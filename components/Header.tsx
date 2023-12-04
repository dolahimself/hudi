import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "expo-router";
import { ASPECT_RATIO, fontSz, hp } from "../utils";
import { CustomPressable } from "./Button";
import { nav } from "../app/_layout";
import { CustomText } from "./Text";
import LeftArrow from "../assets/images/svg/leftarrow.svg";

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
            <LeftArrow />
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
});
