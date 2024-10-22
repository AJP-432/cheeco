import { Stack } from "expo-router";

import { SignupProvider } from "@/context/SignupContext";

export default function SignupLayout() {
  return (
    <SignupProvider>
      <Stack>
        <Stack.Screen name="Username" options={{ headerShown: false }} />
        <Stack.Screen name="Bio" options={{ headerShown: false }} />
        <Stack.Screen name="Signin" options={{ headerShown: false }} />
        {/* <Stack.Screen name="Username" options={{ headerShown: false }} /> */}
      </Stack>
    </SignupProvider>
  );
}
