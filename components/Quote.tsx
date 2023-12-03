import React from "react";
import { StyleSheet, View } from "react-native";
import { fontSz, globalStyles, hp } from "../utils";
import { CustomText } from "./Text";

const Quote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <View style={globalStyles.quoteContainer}>
      <View style={globalStyles.quoteStand} />
      <View style={globalStyles.quoteColumn}>
        <CustomText
          style={{
            fontFamily: "CircularStd-Medium",
            fontStyle: "italic",
            paddingBottom: hp(7.5),
          }}
          fontWeight="500"
          fontSize={fontSz(15)}
          text={quote}
        />
        <CustomText
          style={{
            fontFamily: "Circular-Std-Book",
            paddingTop: hp(7.5),
          }}
          fontWeight="200"
          fontSize={fontSz(13)}
          text={author}
        />
      </View>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({});
