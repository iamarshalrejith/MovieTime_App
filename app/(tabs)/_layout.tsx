import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({ focused, iconName, title }: any) => {
  if (focused) {
    return (
      <View style={styles.focusedContainer}>
        <Ionicons 
          name={iconName}
          size={20}
          color="#151312"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.unfocusedContainer}>
        <Ionicons 
          name={iconName}
          size={20}
          color="#A8B5DB"
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  focusedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 48,
    height: 35,
  },
  unfocusedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  focusedText: {
    color: '#151312',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 56,
          height: 60,
          borderWidth: 1,
          borderColor: "#0f0D23",
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home" title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="search" title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="bookmark" title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="person" title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}