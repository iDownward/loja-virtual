import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';

export default class CardProduct extends React.Component{
  navigate = () => {
    this.props.navigation.navigate('ProductDetail', this.props.product);
  }

  render(){
    const product = this.props.product;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.navigate()}>
          <View style={styles.imgProduct}>
            <Image source={{uri: product.picture}} style={styles.imgProduct} />
            <Text>
            {product.name.length < 18 ? 
                product.name : product.name.substring(0, 15) + '...'}
            </Text>
          </View>
          <Text style={{marginRight: 7}}> 
            {product.description.length < 25 ? 
                product.description : product.description.substring(0, 25) + '...'}
          </Text>
          <Text  style={{marginRight: 7}}>{product.price}</Text>
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
  button: {
    backgroundColor: '#F00',
    marginTop: 'auto',
    marginBottom: 5,
    width: '80%',
    height: screen_height/15,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  btnText: {
      textAlign: 'center',
      color: '#FFF'
  },
  imgProduct: {
      alignSelf: 'flex-start',
      height: '100%',
      width: 100,
      marginRight: 5
  }
});
