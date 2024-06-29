import {
  GoogleOneTapSignIn,
  GoogleSignin,
  OneTapUser,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import NonceGenerator from "a-nonce-generator";
import { useState } from "react";

import { GoogleSignInButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Signin() {
  const [userInfo, setUserInfo] = useState<OneTapUser | null>(null);
  const [isInProgress, setIsInProgress] = useState(false);

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const loadedUserInfo = await GoogleOneTapSignIn.signIn({
        webClientId: `autoDetect`, // works only if you use Firebase
      });
      setUserInfo(loadedUserInfo);
      console.log("Saved credential found");
      console.log(loadedUserInfo);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.NO_SAVED_CREDENTIAL_FOUND:
            // Android and Apple only. No saved credential found, try calling `createAccount`
            console.log("No saved credential found");
            const ng = new NonceGenerator();
            const signinNonce = ng.generate();
            const userData = await GoogleOneTapSignIn.createAccount({
              webClientId: `autoDetect`, // works only if you use Firebase
              nonce: `${signinNonce}`,
            });
            console.log("Finished creating account");
            console.log(userData);
            break;
          case statusCodes.SIGN_IN_CANCELLED:
            // sign in was cancelled
            break;
          case statusCodes.ONE_TAP_START_FAILED:
            // Android and Web only, you probably have hit rate limiting.
            // On Android, you can still call `presentExplicitSignIn` in this case.
            // On the web, user needs to click the `WebGoogleSigninButton` to sign in.
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android-only: play services not available or outdated
            // Web: when calling an unimplemented api (requestAuthorization)
            break;
          default:
          // something else happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  }
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          Welcome to {"\n"} Cheeco!
        </StyledText>
        <SpacerView type="vertical" size={32}></SpacerView>
        <GoogleSignInButton
          onPress={() => {
            signIn();
            console.log("Sign in button pressed");
          }}
          disabled={isInProgress}
        />
      </CenterView>
    </SafeAreaView>
  );
}
