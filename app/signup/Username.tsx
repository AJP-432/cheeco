import { router } from "expo-router";
import React, { useContext } from "react";
import { View } from "react-native";

import { SignupContext } from "@/context/SignupContext";

import { ArrowButton } from "@/components/StyledButton";
import { SignupTextInput } from "@/components/StyledInput";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Username() {
  const { signupData, updateSignupData } = useContext(SignupContext);

  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          What's your @?
        </StyledText>
        <SpacerView type="vertical" size={48}></SpacerView>
        <SignupTextInput
          value={signupData.userName}
          onChangeText={text => updateSignupData({ userName: text })}
          placeholder="@..."
        ></SignupTextInput>
        <SpacerView type="vertical" size={16}></SpacerView>
        <View className="w-4/5 flex-row justify-end">
          <ArrowButton
            onPress={() => {
              console.log(signupData.userName);
              router.push("/signup/Bio");
            }}
            backgroundColor="pink"
            textColor="black"
          ></ArrowButton>
        </View>
      </CenterView>
    </SafeAreaView>
  );
}
