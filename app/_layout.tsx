import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
// import * as SecureStore from "expo-secure-store";
// import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

const PUBLIC_CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (error) {
//       return null;
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (error) {
//       return console.error("Wystąpił błąd podczas zapisywania wartości:", error);
//     }
//   },
// };

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

  return (
    // <ClerkProvider
    //   publishableKey={PUBLIC_CLERK_KEY!}
    //   tokenCache={tokenCache}>
    <RootLayoutNav />
    // </ClerkProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();

  // const { isLoaded, isSignedIn } = useAuth();
  // useEffect(() => {
  //   if (!isLoaded && !isSignedIn) {
  //     router.push("/(modals)/login");
  //   }
  // }, [isLoaded]);

  const HeaderLeftCloseButton = () => {
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
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: () => <HeaderLeftCloseButton />,
        }}
      />
    </Stack>
  );
}
