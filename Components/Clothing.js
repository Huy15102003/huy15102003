import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Áo sơ mi trắng',
    price: '200.000đ',
    image: require('assets/logologin.jpg'),
  },
  {
    id: '2',
    name: 'Áo thun đen',
    price: '150.000đ',
    image: require('assets/logologin.jpg'),
  },
  {
    id: '3',
    name: 'Quần jeans nam',
    price: '300.000đ',
    image: require('assets/logologin.jpg'),
  },
  // Thêm các sản phẩm khác vào đây
];

const ClothingScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#888',
  },
});

export default ClothingScreen;