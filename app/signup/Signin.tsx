import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  GoogleOneTapSignIn,
  GoogleSignin,
  OneTapUser,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import NonceGenerator from "a-nonce-generator";
import { useContext, useState } from "react";

import { SignupContext } from "@/context/SignupContext";

import { GoogleSignInButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Signin() {
  const [userInfo, setUserInfo] = useState<OneTapUser | null>(null);
  const [isInProgress, setIsInProgress] = useState(false);
  const { signupData, updateSignupData } = useContext(SignupContext);

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const loadedUserInfo = await GoogleOneTapSignIn.signIn({
        webClientId: `autoDetect`, // works only if you use Firebase
      });
      setUserInfo(loadedUserInfo);
      console.log("Saved credential found");
      const usersCollection = firestore().collection("Users");

      const googleCredential = auth.GoogleAuthProvider.credential(
        loadedUserInfo.idToken
      );
      auth().signInWithCredential(googleCredential);

      // const userSnapshot = await usersCollection
      //   .where("email", "==", loadedUserInfo.user.email)
      //   .get();

      // if (userSnapshot.empty) {
      //   console.log(
      //     "User not found, creating user: ",
      //     loadedUserInfo.user.email,
      //     loadedUserInfo.user.id,
      //     loadedUserInfo.user.givenName,
      //     loadedUserInfo.user.familyName
      //   );
      //   updateSignupData({
      //     // @ts-ignore
      //     googleId: loadedUserInfo.user.id,
      //     // @ts-ignore
      //     email: loadedUserInfo.user.email,
      //     // @ts-ignore
      //     firstName: loadedUserInfo.user.givenName,
      //     // @ts-ignore
      //     lastName: loadedUserInfo.user.familyName,
      //   });
      //   router.replace("/signup/Username");
      // } else {
      //   console.log("User found, signing in: ", loadedUserInfo.user.email);
      //   router.replace("/home");
      // }
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
