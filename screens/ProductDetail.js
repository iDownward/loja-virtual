import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

export default class ProductDetail extends React.Component {

  static navigationOptions = {
      title: 'Produto',
  }
  
  render() {
    const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    const {name, description, price, picture} = this.props.navigation.state.params;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: picture}} style={styles.imgProduct} />  
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}><Bold>Descricao: </Bold>{description}</Text>
          <Text style={styles.text}><Bold>Preco: </Bold>{price}</Text>
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
    title: {
      textAlign: 'center',
      fontSize: 23
    },
    text: {
        fontSize: 17,
        marginTop: 10
    },
    imgProduct: {
      marginVertical: 50,
      width: 140,
      height: 140
    }
});
