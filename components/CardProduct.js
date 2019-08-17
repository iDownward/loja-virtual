/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class CardProduct extends React.Component{

  addProduct = () => {

  }

  render(){
    return (
      <View style={styles.container}>
          <Text>{this.props.product.name}</Text>
          <Text>LOrem ipsum balskd nal sjdsao jdsao jdashd iusaius hdiusa hd</Text>
          <TouchableOpacity style={styles.button}>
              <Text>Adicionar</Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    width: 160,
    alignItems: 'center',
    margin: 2,
    height: 160
  },
  button: {
    backgroundColor: '#F00'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
