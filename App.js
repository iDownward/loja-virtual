import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const App = createAppContainer(
  createStackNavigator({
    Home,
    ProductDetail,
    Cart
  })
);

export default App;