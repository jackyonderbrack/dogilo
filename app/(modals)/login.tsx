import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth, signIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum Strategy {
  GOOGLE = "oauth_google",
  APPLE = "oauth_apple",
  FACEBOOK = "oauth_facebook",
}

const login = () => {
  useWarmUpBrowser();
  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: "oauth_facebook" });

  const onSelectAuthentication = async (strategy: Strategy) => {
    const selectedAuthentication = {
      [Strategy.GOOGLE]: googleAuth,
      [Strategy.APPLE]: appleAuth,
      [Strategy.FACEBOOK]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuthentication();
      console.log("createdSessionId:", createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        // router.back();
      }
    } catch (err) {
      console.error("Authentication error: ", err);
      router.push("/(tabs)/profile");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Wpisz swój e-mail"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Dalej</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text>lub</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuthentication(Strategy.GOOGLE)}>
          <Ionicons
            name="logo-google"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Zaloguj z Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuthentication(Strategy.APPLE)}>
          <Ionicons
            name="logo-apple"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Zaloguj z Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuthentication(Strategy.FACEBOOK)}>
          <Ionicons
            name="logo-facebook"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Zaloguj z Meta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="call-outline"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Użyj numeru telefonu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe6f7",
    padding: 20,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  divider: {
    fontFamily: "lex-bold",
    color: Colors.grey,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "lex-bold",
  },
});
