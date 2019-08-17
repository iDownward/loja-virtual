import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

export default class ProductDetail extends React.Component {

  static navigationOptions = {
      title: 'Produto',
  }
  
  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/react_native.png')} />  
        <View style={styles.textContainer}>
          <Text style={styles.text}><B>Nome: </B>Produto Legal</Text>
          <Text style={styles.text}><B>Descricao: </B>produto muito daora pra caramba selokooo oooooooooo ooooo o oo oo o </Text>
          <Text style={styles.text}><B>Preco: </B>R$ 50,00</Text>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    textContainer: {
      marginLeft: '5%'
    },
    text: {
        fontSize: 17
    }
});
