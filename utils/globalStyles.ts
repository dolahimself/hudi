import { StyleSheet } from "react-native";
import { wp, hp } from "./constants";
import { Colors } from "./colors";

export const globalStyles = StyleSheet.create({
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowElevation: {
    elevation: 5,
    shadowColor: Colors.shadowColor,
  },
  quoteContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  quoteColumn: {
    width: "92.5%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  quoteStand: {
    height: "100%",
    width: wp(10),
    borderRadius: wp(10),
    backgroundColor: Colors.black,
    marginRight: wp(40),
  },
});
