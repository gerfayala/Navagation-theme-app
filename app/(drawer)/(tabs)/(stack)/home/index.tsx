import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <SafeAreaView className="flex flex-1 ">
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => {
            router.push("/products");
          }}
        >
          Products
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => {
            router.push("/profile");
          }}
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => {
            router.push("/settings");
          }}
        >
          Settings
        </CustomButton>

        <CustomButton
          onPress={onToggleDrawer}
          variant="text-only"
          className="mb-2"
          color="secondary"
        >
          Abrir Menu
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
