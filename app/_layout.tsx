import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { Routes } from "../utils";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export type nav = NavigationProp<Routes>;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Circular-Std-Bold": require("../assets/fonts/Circular-Std-Bold.otf"),
    "Circular-Std-Book": require("../assets/fonts/Circular-Std-Book.otf"),
    "CircularStd-Black": require("../assets/fonts/CircularStd-Black.otf"),
    "CircularStd-Medium": require("../assets/fonts/CircularStd-Medium.otf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="first.step" options={{ headerShown: false }} />
      <Stack.Screen name="habits" options={{ headerShown: false }} />
    </Stack>
  );
}
