import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TabIconProps = {
  focused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
};

const TabIcon = ({ focused, iconName }: TabIconProps) => {
  return (
    <View
      style={
        focused ? styles.focusedContainer : styles.unfocusedContainer
      }
    >
      <Ionicons
        name={iconName}
        size={22}
        color={focused ? "#151312" : "#A8B5DB"}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="bookmark" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="person" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",   
    backgroundColor: "#1A1633",
    borderRadius: 50,
    marginHorizontal: 20,
    bottom: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#0f0D23",
  },
  focusedContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 50,
    height: 30,
  },
  unfocusedContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});