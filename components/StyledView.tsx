import React from "react";
import {
  SafeAreaView as SafeView,
  StyleSheet,
  View,
  type ViewProps,
} from "react-native";

type StyledViewProps = ViewProps & {
  backgroundColor?: "black" | "white" | "pink" | "transparent";
};

type SpacerViewProps = ViewProps & {
  type?: "horizontal" | "vertical";
  size?: number;
};

export function SafeAreaView({ children }: ViewProps): JSX.Element {
  return <SafeView className="flex-1">{children}</SafeView>;
}

export function CenterView({
  backgroundColor = "black",
  children,
}: StyledViewProps): JSX.Element {
  return (
    <View
      className={`flex-1 items-center justify-center bg-${backgroundColor}`}
    >
      {children}
    </View>
  );
}

export function SpacerView({ type = "vertical", size = 12 }: SpacerViewProps) {
  return (
    <View
      style={[
        type === "vertical" ? { height: size } : { width: size },
        styles.spacer,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  spacer: {
    backgroundColor: "transparent",
  },
});
