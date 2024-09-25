import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";
import FeedScreen from "./screens/FeedScreen";
import CalculatorScreen from "./screens/CalculatorScreen";

// Iconos
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="CalculatorScreen"
        >
            <HomeStackNavigator.Screen
                name="CalculatorScreen"
                component={CalculatorScreen}
            />
            {/* <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            /> */}
        </HomeStackNavigator.Navigator>
    )
}   

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="CalculatorScreen"
            screenOptions={{
                tabBarActiveTintColor: "cyan",
            }}
        >
            {/* <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={size} color={color} />
                    ),
                    tabBarBadge: 7,
                    headerShown: false,
                }} 
            /> */}
            {/* <Tab.Screen 
                name="Settings" 
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            /> */}
            <Tab.Screen 
                name="Calculator" 
                component={CalculatorScreen}
                options={{
                    tabBarLabel: 'Calculator',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calculator" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="Feed" 
                component={FeedScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="feed" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}