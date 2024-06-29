import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { FeedCard } from "@/components/FeedCard";
import { CenterView, SafeAreaView } from "@/components/StyledView";

const { height, width } = Dimensions.get("window");
const viewHeight = height * 0.8;
const viewWidth = width * 0.8;

const feedData = [
  {
    id: "1",
    name: "Miranda",
    question: "I could never handle sitting on",
    answer: "french santa",
    isLiked: true,
  },
  {
    id: "2",
    name: "John",
    question: "What is your favorite hobby?",
    answer: "Playing guitar",
    isLiked: false,
  },
  {
    id: "3",
    name: "Samantha",
    question: "What is your favorite color?",
    answer: "Pink",
    isLiked: true,
  },
  {
    id: "4",
    name: "Charlotte",
    question: "What is your favorite movie?",
    answer: "The Godfather",
    isLiked: false,
  },
];

export default function Home() {
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <View style={styles.container}>
          <View className="flex-1 rounded-xl bg-pink p-1">
            <FlatList
              data={feedData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <FeedCard {...item} />
                </View>
              )}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              snapToInterval={viewHeight}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
            />
          </View>
        </View>
      </CenterView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: viewHeight,
    width: viewWidth,
  },
  cardContainer: {
    height: viewHeight,
  },
});
