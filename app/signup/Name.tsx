import { router } from "expo-router";
import React, { useContext } from "react";
import { View } from "react-native";

import { SignupContext } from "@/context/SignupContext";

import { ArrowButton } from "@/components/StyledButton";
import { SignupTextInput } from "@/components/StyledInput";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Name() {
  const { signupData, updateSignupData } = useContext(SignupContext);

  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          Tell us about {"\n"} yourself.
        </StyledText>
        <SpacerView type="vertical" size={48}></SpacerView>
        <SignupTextInput
          value={signupData.firstName}
          onChangeText={text => updateSignupData({ firstName: text })}
          placeholder="first name..."
        ></SignupTextInput>
        <SpacerView type="vertical" size={16}></SpacerView>
        <SignupTextInput
          value={signupData.lastName}
          onChangeText={text => updateSignupData({ lastName: text })}
          placeholder="last name..."
        ></SignupTextInput>
        <SpacerView type="vertical" size={16}></SpacerView>
        <View className="w-4/5 flex-row justify-end">
          <ArrowButton
            onPress={() => {
              console.log(signupData.firstName, signupData.lastName);
              router.push("/signup/Username");
            }}
            backgroundColor="pink"
            textColor="black"
          ></ArrowButton>
        </View>
      </CenterView>
    </SafeAreaView>
  );
}
