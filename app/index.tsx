import { Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const App = () => {
  return (
    <Redirect href={"/home"} />

    // <SafeAreaView className="flex flex-1 ">
    //   <View className=" bg-green mt-5 mx-2.5">
    //     <Text className="text-primary-800 text-center text-4xl font-work-black  ">
    //       NativeWind
    //     </Text>
    //     <Text className=" text-secondary-600 text-center  text-3xl font-work-bold ">
    //       NativeWind
    //     </Text>
    //     <Text className="text-tertiary-900 text-center  text-2xl font-work-light  ">
    //       NativeWind
    //     </Text>
    //   </View>
    // </SafeAreaView>
  );
};

export default App;
