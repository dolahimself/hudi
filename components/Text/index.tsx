import React, { ComponentProps, memo, useMemo } from "react";
import { StyleProp, TextStyle, Text as BaseText } from "react-native";
import { Colors, fontSz } from "../../utils";

type TextProps = ComponentProps<typeof BaseText> & {
  text: string;
  fontSize?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  fontFamily?:
    | "Circular-Std-Bold"
    | "Circular-Std-Book"
    | "CircularStd-Black"
    | "CircularStd-Medium";
  lineHeight?: number;
  numberOfLines?: number;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  style?: StyleProp<TextStyle>;
};

export const CustomText = memo(
  ({
    text,
    fontSize = fontSz(15),
    lineHeight,
    numberOfLines = 0,
    onPress,
    textAlign,
    color,
    fontWeight = "400",
    fontFamily = "CircularStd-Medium",
    textDecorationLine = "none",
    style,
    ...rest
  }: TextProps) => {
    const propsStyle = useMemo(
      () => ({
        color: Colors.black,
        fontSize,
        textAlign,
        lineHeight,
        fontWeight,
        fontFamily,
        textDecorationLine,
      }),
      [
        color,
        textAlign,
        textDecorationLine,
        fontWeight,
        fontFamily,
        lineHeight,
        fontSize,
      ]
    );

    return (
      <BaseText
        numberOfLines={numberOfLines}
        onPress={onPress}
        style={[propsStyle, style]}
        {...rest}
      >
        {text}
      </BaseText>
    );
  }
);
