import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://helios-i.mashable.com/imagery/articles/00ITPG6lvAMMP2M4bIHAvwX/hero-image.fill.size_1248x702.v1725051736.jpg' }} 
                style={styles.image}
            />
            <Text style={styles.title}>
                Brazil banea X (Twitter) de su región.
            </Text>
            <Text style={styles.description}>
                El gobierno de Brasil ha decidido bloquear la red social X, anteriormente conocida como Twitter, por incumplir con las normativas locales.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16, // Letra más pequeña para la descripción
        textAlign: 'center',
        color: '#666', // Color gris para distinguir del título
    },
});

export default FeedScreen;
