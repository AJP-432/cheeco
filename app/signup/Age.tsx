import React, { useContext } from "react";
import { View } from "react-native";

import { SignupContext } from "@/context/SignupContext";

import { SignupDateTimePicker } from "@/components/DateTimePicker";
import { ArrowButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Age() {
  const { signupData, updateSignupData } = useContext(SignupContext);

  const handleDateChange = (date: Date) => {
    updateSignupData({ ...signupData, age: date });
  };

  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          How old {"\n"} are you?
        </StyledText>
        <SpacerView type="vertical" size={48}></SpacerView>
        <SignupDateTimePicker onDateChange={handleDateChange} />
        <SpacerView type="vertical" size={16}></SpacerView>
        <View className="w-4/5 flex-row justify-end">
          <ArrowButton
            onPress={() => console.log(signupData.age)}
            backgroundColor="pink"
            textColor="black"
          />
        </View>
      </CenterView>
    </SafeAreaView>
  );
}
