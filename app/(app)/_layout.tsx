import { Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          backgroundColor: "#FF85C0",
          paddingHorizontal: 50,
          height: 80,
        },
        headerStyle: { backgroundColor: "black" },
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Poppins-Bold" },
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="microphone" size={48} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <Octicons name="paper-airplane" size={48} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="You"
        options={{
          title: "You",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={48} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
