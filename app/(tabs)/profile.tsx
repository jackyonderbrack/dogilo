import { View, Text, Button } from "react-native";
import React from "react";
// import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const profile = () => {
  // const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Button
        title="Wyloguj się"
        // onPress={() => signOut()}
      />

      <Link href={"/(modals)/login"}>
        <Text>Zaloguj się</Text>
      </Link>
    </View>
  );
};

export default profile;
