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
  },
  {
    id: "2",
    name: "John",
    question: "What is your favorite hobby?",
    answer: "Playing guitar",
  },
  {
    id: "3",
    name: "Samantha",
    question: "What is your favorite color?",
    answer: "Pink",
  },
  {
    id: "4",
    name: "Charlotte",
    question: "What is your favorite movie?",
    answer: "The Godfather",
  },
];

export default function Home() {
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <View style={styles.container}>
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
