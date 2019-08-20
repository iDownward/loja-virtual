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
          <View>
            <Image source={{uri: product.picture}} style={styles.imgProduct} />
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyTitle}>{product.name}</Text>
            <Text> 
              {product.description.length < 35 ? 
                  product.description : product.description.substring(0, 35) + '...'}
            </Text>
            <Text>R$ {product.price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity>
            <Text>APAGAR</Text>
          </TouchableOpacity>
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
    justifyContent: 'center'
  },
  bodyTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
