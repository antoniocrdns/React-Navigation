import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const Navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
            >HomeScreen</Text>
            <TouchableOpacity
                onPress={() => Navigation.navigate("Stack")}
                style={{
                    backgroundColor: "cyan",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;