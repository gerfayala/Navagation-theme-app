import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";

import { useFonts } from "expo-font";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default MainLayout;
