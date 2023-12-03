import React from "react";
import { FlatList, Image, Platform, StyleSheet, View } from "react-native";
import {
  Colors,
  fontSz,
  getHabitCardBackgroundColor,
  globalStyles,
  habitsData,
  hp,
} from "../utils";
import { CustomText } from "../components/Text";
import { CustomPressable } from "../components/Button";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";

const HabitsCard = ({
  name,
  header,
  title,
  image,
}: {
  name: string;
  header: string;
  title: string;
  image: any;
}) => {
  return (
    <CustomPressable
      activeOpacity={0.9}
      onPress={() => {}}
      style={[
        styles.habitCardContainer,
        globalStyles.shadowElevation,
        globalStyles.shadowProp,
        {
          backgroundColor: getHabitCardBackgroundColor(name),
        },
      ]}
    >
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: fontSz(12),
          paddingHorizontal: hp(12.5),
          paddingVertical: hp(12.5),
        }}
      >
        <View style={globalStyles.rowBetween}>
          <CustomText
            style={{
              width: "75%",
              fontWeight: "500",
              fontFamily: "CircularStd-Medium",
              color: Colors.habitHeader,
            }}
            fontSize={fontSz(17)}
            text={`${header}`}
          />
          <Image source={image} style={styles.habitImage} />
        </View>
        <CustomText
          numberOfLines={4}
          style={{
            width: "75%",
            fontWeight: "500",
            fontFamily: "Circular-Std-Book",
            color: Colors.habitTitle,
          }}
          fontSize={fontSz(15)}
          text={`${title}`}
        />
      </View>
    </CustomPressable>
  );
};

const Habits = () => {
  const getData = () => {
    return habitsData;
  };

  return (
    <View style={styles.container}>
      <Header
        withIcon={true}
        title={"Habits"}
        style={{
          paddingHorizontal: fontSz(24),
          paddingBottom: hp(25),
          paddingTop: hp(50),
          borderBottomColor: Colors.divider,
          borderBottomWidth: 1,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={getData()}
        ListHeaderComponent={
          <CustomText
            style={{
              fontWeight: "500",
              fontFamily: "CircularStd-Medium",
              paddingVertical: hp(5),
            }}
            fontSize={fontSz(30)}
            text={`Choose a habit`}
          />
        }
        renderItem={({ item }) => {
          const { name, header, title, image } = item;
          return (
            <HabitsCard
              name={name}
              header={header}
              title={title}
              image={image}
            />
          );
        }}
        keyExtractor={(item, index) => `${index}`}
      />
      <StatusBar
        backgroundColor={Colors.white}
        style={"dark"}
        hidden={false}
        translucent={false}
      />
    </View>
  );
};

export default Habits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flatListContainer: {
    paddingTop: hp(15),
    paddingHorizontal: fontSz(24),
  },
  habitCardContainer: {
    borderRadius: fontSz(12),
    marginVertical: hp(5),
    marginBottom: hp(15),
    paddingHorizontal: hp(12.5),
    paddingVertical: hp(12.5),
  },
  habitImage: {
    height: fontSz(57.5),
    width: fontSz(57.5),
  },
});
