import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "lex-black": require("../assets/fonts/Lexend-Black.ttf"),
    "lex-bold": require("../assets/fonts/Lexend-Bold.ttf"),
    "lex-extrabold": require("../assets/fonts/Lexend-ExtraBold.ttf"),
    "lex-extralight": require("../assets/fonts/Lexend-ExtraLight.ttf"),
    "lex-light": require("../assets/fonts/Lexend-Light.ttf"),
    "lex-medium": require("../assets/fonts/Lexend-Medium.ttf"),
    "lex-regular": require("../assets/fonts/Lexend-Regular.ttf"),
    "lex-semibold": require("../assets/fonts/Lexend-SemiBold.ttf"),
    "lex-thin": require("../assets/fonts/Lexend-Thin.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const HeaderLeftCloseButton = () => {
    const router = useRouter();
    return (
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(modals)/login"
        options={{
          title: "Zaloguj się lub zarejestruj",
          headerTitleStyle: {
            fontFamily: "lex-semibold",
          },
          presentation: "modal",
          headerLeft: () => <HeaderLeftCloseButton />,
        }}
      />
      <Stack.Screen
        name="listing/[id]"
        options={{ headerTitle: "", headerLeft: () => <HeaderLeftCloseButton /> }}
      />
      <Stack.Screen
        name="(modals)/finder"
        options={{
          headerTitle: "Wyszukiwanie",
          headerLeft: () => <HeaderLeftCloseButton />,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
