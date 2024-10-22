import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import React, { useContext } from "react";
import { View } from "react-native";

import { SignupContext } from "@/context/SignupContext";

import { ArrowButton } from "@/components/StyledButton";
import { SignupTextInput } from "@/components/StyledInput";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Bio() {
  const { signupData, updateSignupData } = useContext(SignupContext);

  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          Sum {"\n"} yourself up.
        </StyledText>
        <SpacerView type="vertical" size={8}></SpacerView>
        <StyledText type="default" color="white">
          You've got a 1 word limit for your bio!
        </StyledText>
        <SpacerView type="vertical" size={48}></SpacerView>
        <SignupTextInput
          value={signupData.bio}
          onChangeText={text => updateSignupData({ bio: text })}
          placeholder="WHAT I SAY??"
        ></SignupTextInput>
        <SpacerView type="vertical" size={16}></SpacerView>
        <View className="w-4/5 flex-row justify-end">
          <ArrowButton
            onPress={async () => {
              console.log(signupData.bio);
              console.log(signupData);

              

              const usersCollection = firestore().collection("users");
              // Use the UID provided by Google as the document ID
              const newUserDocRef = usersCollection.doc(signupData.googleId);

              // Push new user data to Firestore
              await newUserDocRef.set({
                uid: signupData.googleId,
                email: signupData.email,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
                userName: signupData.userName,
                bio: signupData.bio,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });

              console.log("User data saved to Firestore");
              
            }}
            backgroundColor="pink"
            textColor="black"
          ></ArrowButton>
        </View>
      </CenterView>
    </SafeAreaView>
  );
}
