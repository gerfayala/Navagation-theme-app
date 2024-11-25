import { View, Text } from "react-native";
import React from "react";
import { Redirect, useLocalSearchParams } from "expo-router";
import { products } from "@/store/product.store";

const ProductsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className=" text-secondary font-work-light text-4md">
        {product.description}
      </Text>
      <Text className="font-work-bold text-3sm mt-2">{product.price}</Text>
    </View>
  );
};

export default ProductsScreen;
