import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: 'https://i.pinimg.com/736x/c0/ab/a7/c0aba72df4ddbc3aaae3faba8f77f0fe.jpg',
        }}
      />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to clothing store</Text>
          {/* <Image style={styles.logo} source={require('./assets/icon.png')} /> */}
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.features}>
            <TouchableOpacity style={styles.featureItem}>
              <Ionicons name="shirt" size={50} color="white" />
              <Text style={styles.featureText}>Quần áo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureItem}>
              <MaterialCommunityIcons name="shoe-sneaker" size={50} color="white" />
              <Text style={styles.featureText}>Giày dép</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureItem}>
              <MaterialCommunityIcons name="necklace" size={50} color="white" />
              <Text style={styles.featureText}>Trang sức</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureItem}>
              <MaterialCommunityIcons name="redhat" size={50} color="white" />
              <Text style={styles.featureText}>Mũ nón</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    height: 250,
    backgroundColor: 'rgba(74, 144, 226, 0.8)',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});