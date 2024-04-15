import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: { fontFamily: "lex-bold" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Znajdź",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="dog"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Polubione",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="planned"
        options={{
          tabBarLabel: "Zaplanowane",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="warehouse"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Wiadomości",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="tortoise"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
