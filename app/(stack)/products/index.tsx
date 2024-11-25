import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/product.store";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10 border-b border-gray-200">
            <Text className="text-lg font-work-bold">{item.title}</Text>
            <Text className="text-secondary-600">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="text-primary-800 font-work-bold">
                ${item.price}
              </Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                See details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
