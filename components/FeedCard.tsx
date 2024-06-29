import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, View } from "react-native";

import { StyledText } from "@/components/StyledText";
import { CenterView, SpacerView } from "./StyledView";

type FeedCardProps = {
  name: string;
  question: string;
  answer: string;
  isLiked: boolean;
};

export function FeedCard({ name, question, answer, isLiked }: FeedCardProps) {
  const [isLike, setIsLike] = useState(isLiked);
  return (
    <View className="flex-1 rounded-xl bg-pink p-1">
      <View className="align-items h-12 flex-row justify-around">
        <StyledText type="subtitle" color="black">
          {name} says...
        </StyledText>
        <StyledText type="default" color="black">
          23 hr
        </StyledText>
      </View>
      <View className="flex-1 rounded-xl bg-black">
        <CenterView backgroundColor="transparent">
          <StyledText type="cardQuestion" color="white">
            {question}
          </StyledText>
          <SpacerView type="vertical" size={16}></SpacerView>
          <StyledText type="title" color="pink">
            {answer}
          </StyledText>
        </CenterView>
        <View className="flex-row justify-between px-8 py-4">
          <Pressable onPress={() => setIsLike(false)}>
            {isLike ? (
              <MaterialCommunityIcons
                name="heart-broken-outline"
                size={48}
                color="white"
              />
            ) : (
              <FontAwesome6 name="heart-crack" size={48} color="white" />
            )}
          </Pressable>
          <Pressable onPress={() => setIsLike(true)}>
            {!isLike ? (
              <FontAwesome5 name="heart" size={48} color="white" />
            ) : (
              <FontAwesome name="heart" size={48} color="white" />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
