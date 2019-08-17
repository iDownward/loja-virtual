/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class CardProduct extends React.Component{

  addProduct = () => {

  }

  render(){
    var textin = 'produto muito daora sadsadsadjsad asd'
    return (
      <TouchableOpacity style={styles.container}>
          <View style={styles.cardHeader}>
            <Image source={require('../assets/react_native.png')} style={styles.imgProduct} />
            <Text>{this.props.product.name}</Text>
          </View>
          <Text> 
            {textin.length < 25 ? 
                textin : textin.substring(0, 25) + '...'}
          </Text>

          <Text style={{fontWeight: 'bold'}}>Preço: 
            <Text style={{fontWeight: 'normal'}}> R$ 20,50</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
      </TouchableOpacity>
    );
  }
};

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    width: screen_width/2,
    alignItems: 'flex-end',
    margin: 2,
    height: screen_height/2.5,
    flexWrap: 'wrap'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: screen_height/12
  },
  button: {
    backgroundColor: '#F00',
    marginTop: 'auto',
    width: '80%',
    marginBottom: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    height: screen_height/15
  },
  btnText: {
      textAlign: 'center',
      color: '#FFF'
  },
  imgProduct: {
      alignSelf: 'flex-start',
      height: 40,
      width: 40,
      marginRight: 5
  }
});
