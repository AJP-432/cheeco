import { AntDesign, Entypo } from "@expo/vector-icons";
import { Pressable, type PressableProps } from "react-native";

import { StyledText } from "@/components/StyledText";

export type StyledPressableProps = PressableProps & {
  backgroundColor?: "black" | "white" | "pink";
  textColor?: "black" | "white" | "pink";
};

export function WideButton({
  onPress,
  backgroundColor = "black",
  textColor = "white",
}: StyledPressableProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      className={`bg-${backgroundColor} h-12 w-4/5 flex-row items-center justify-evenly rounded-xl`}
    >
      <StyledText type="subtitle" color={textColor}>
        Continue
      </StyledText>
    </Pressable>
  );
}

export function ArrowButton({
  onPress,
  backgroundColor = "black",
  textColor = "white",
}: StyledPressableProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      className={`bg-${backgroundColor} h-12 w-16 flex-row items-center justify-evenly rounded-xl`}
    >
      <Entypo name="arrow-right" size={24} color={textColor} />
    </Pressable>
  );
}

export function GoogleSignInButton({ onPress }: PressableProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      className="h-12 w-4/5 flex-row items-center justify-evenly rounded-xl bg-pink"
    >
      <AntDesign name="google" size={24} color="black" />
      <StyledText type="subtitle" color="black">
        Continue with Google
      </StyledText>
    </Pressable>
  );
}
