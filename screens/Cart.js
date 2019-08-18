import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet, AsyncStorage } from 'react-native';

export default class Cart extends React.Component {

  static navigationOptions = {
      title: 'Carrinho',
  }
  
  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}> 
        <View style={styles.textContainer}>
          <Text style={styles.title}>Total: R$</Text>
          <Text>{'hello'}</Text>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    title: {
      textAlign: 'center',
      fontSize: 23
    },
    text: {
        fontSize: 17,
        marginTop: 10
    },
    imgCart: {
        width: 30,
        height: 30,
    }
});
