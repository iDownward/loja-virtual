import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';
//import Icon from 'react-native-icons';

export default class CardProduct extends React.Component{
  navigate = () => {
    this.props.navigation.navigate('ProductDetail', this.props.product);
  }

  render(){
    const product = this.props.product;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.navigate()}>
          <View>
            <Image source={{uri: product.picture}} style={styles.imgProduct} />
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyTitle}>{product.name}</Text>
            <Text> 
              {product.description.length < 25 ? 
                  product.description : product.description.substring(0, 25) + '...'}
            </Text>
            <Text>R$ {product.price.toFixed(2)}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={this.props.addProduct} style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{product.quantity}</Text>
            <TouchableOpacity onPress={this.props.removeProduct} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
          </View>
          
      </TouchableOpacity>
    );
  }
};

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEF',
    width: screen_width,
    margin: 2,
    height: screen_height/6,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  imgProduct: {
      alignSelf: 'flex-start',
      height: '100%',
      width: screen_width/4,
      marginRight: 5
  },
  body: {
    marginLeft: 2,
    flex: 0.6,
    justifyContent: 'center'
  },
  bodyTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4
  },
  quantityButton: {
    height:'33%',
    width: '100%'
  },
  quantityText: {
    fontWeight: 'bold', 
    fontSize: 25,
    textAlign: 'center'
  }
});
