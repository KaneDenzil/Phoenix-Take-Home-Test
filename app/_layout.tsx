import { Stack, router } from "expo-router"
import { useEffect } from "react";
import * as Linking from 'expo-linking';


const RootLayout= () => {

useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        const parsed = Linking.parse(url);
        console.log("Initial PARSED URL:", parsed);
        handleDeepLink(parsed);
      }
    });

    const subscription = Linking.addEventListener('url', ({ url }) => {
      const parsed = Linking.parse(url);
      console.log("Runtime PARSED URL:", parsed);
      handleDeepLink(parsed);
    });

    return () => subscription.remove();
  }, []);

    const handleDeepLink = (parsed: Linking.ParsedURL) => {
    const screen = parsed.queryParams?.screen;
    console.log("Screen:", screen);

    if (screen === "push") {
      router.push("/screens/PushNotificationTest");
    } else if (screen === "login") {
      router.push("/screens/Login");
    } else {
      console.warn("Unmatched deep link screen:", screen);
    }
  };

    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="screens/Login" options={{ headerShown: false }}/>
        <Stack.Screen name="screens/PushNotificationTest" options={{ headerShown: false }}/>
    </Stack>
}

export default RootLayout;