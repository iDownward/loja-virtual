import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CardProduct from './components/CardProduct'
import ProductDetail from './screens/ProductDetail';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const App = createAppContainer(
  createStackNavigator({
    Home: Home,
    ProductDetail: ProductDetail
  })
);

export default App;