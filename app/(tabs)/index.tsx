import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/finder"}>Wyszukaj</Link>
      <Link href={"/listing/2213"}>Szczególy listy</Link>
    </View>
  );
};

export default Page;
