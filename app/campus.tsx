import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome5"; // Importamos el ícono de FontAwesome
import { playSound } from './utils/playSound';


export default function C201Screen() {

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
        <Link href="/" asChild>
          <View style={styles.backButtonContent}>
            <Icon name="chevron-left" size={20} color="#CE0615" style={styles.icon} />
            <Text style={styles.backText}>Volver</Text>
          </View>
        </Link>
        </Pressable>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.title}>Mapa Campus</Text>
        <Image source={require('../assets/images/mapa_campus.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Add margin to the top to move the container down
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40, // Ajusta este valor según sea necesario
    left: 20, // Ajusta este valor según sea necesario
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#CE0615',
    marginLeft: 5, // Ajusta el espacio entre el icono y el texto
  },
  image: {
    width: 470,
    height: 610,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
  },
});
