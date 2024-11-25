import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const HomeScreen = () => {
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

        <Link href={"/products"} asChild>
          <CustomButton variant="text-only" className="mb-2" color="secondary">
            Products
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
