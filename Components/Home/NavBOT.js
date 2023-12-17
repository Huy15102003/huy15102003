import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Feather, Ionicons, Entypo, AntDesign } from 'react-native-vector-icons';
import Home from '../Screen/Home';
import Login from '../Login';
import Cart from '../Screen/Cart';
import NavTOP from './NavTOP';
import Notification from '../Screen/Notification';
import Favorites from '../Screen/Favorites';

const Tab = createBottomTabNavigator();

const NavBOT = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconComponent;

      if (route.name === 'Trang chủ') {
        iconComponent = <Entypo name="home" size={size} color={color} />;
      } else if (route.name === 'Giỏ hàng') {
        iconComponent = <FontAwesome5 name="shopping-bag" size={size} color={color} />;
      } else if (route.name === 'Yêu thích') {
        iconComponent = <AntDesign name="heart" size={size} color={color} />;
      } else if (route.name === 'Thông báo') {
        iconComponent = <Ionicons name="notifications" size={size} color={color} />;
      }
      return iconComponent;
    },
    tabBarActiveTintColor: '#D17842',
    tabBarInactiveTintColor: '#888',
    tabBarStyle: {
      height: 80,
      backgroundColor: '#0C0F14',
      borderTopColor: '#0C0F14',
    },
    tabBarLabelStyle: {
        display: 'none',
      },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Trang chủ" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Giỏ hàng" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Yêu thích" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Thông báo" component={Notification} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default NavBOT;