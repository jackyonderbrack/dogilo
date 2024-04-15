import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Id = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("file: [id].tsx:", id);
  return (
    <View>
      <Text>[id]</Text>
    </View>
  );
};

export default Id;
