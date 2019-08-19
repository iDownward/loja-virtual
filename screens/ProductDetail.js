import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

export default class ProductDetail extends React.Component {

  static navigationOptions = {
      title: 'Produto',
  }
  
  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    const productName = this.props.navigation.getParam('productName', 'NO-NAME');
    const productDescription = this.props.navigation.getParam('productDescription', '');
    const productPrice = this.props.navigation.getParam('productPrice', 'NO-PRICE');
    const productPicture = this.props.navigation.getParam('productImage', 'Sem imagem');
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: productPicture}} style={styles.imgProduct} />  
        <View style={styles.textContainer}>
          <Text style={styles.title}>{productName}</Text>
          <Text style={styles.text}><B>Descricao: </B>{productDescription}</Text>
          <Text style={styles.text}><B>Preco: </B>{productPrice}</Text>
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
