import React from "react";
import { Text, type TextProps } from "react-native";

type StyledTextProps = TextProps & {
  type?: "default" | "title" | "subtitle" | "cardQuestion";
  color?: "black" | "white" | "pink";
};

export function StyledText({
  type = "default",
  color = "pink",
  children,
}: StyledTextProps): JSX.Element {
  const colorCode = color === "pink" ? "#FF85C0" : color;
  return (
    <Text
      className={`${styles[type]} text-${color}`}
      style={{ color: colorCode }}
    >
      {children}
    </Text>
  );
}

const styles = {
  default: "font-poppins",
  title: "font-poppins-bold text-3xl text-center",
  subtitle: "font-poppins-bold text-xl text-center",
  cardQuestion: "font-poppins text-3xl text-center",
};
