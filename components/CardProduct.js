import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native';
import { AsyncSubject } from 'rxjs';

export default class CardProduct extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      teste: ''
    }
  }

  addProduct = async () => {
    try {
      //await AsyncStorage.setItem(String(this.props.product.id), this.props.product.name);
      const value = await AsyncStorage.getItem('1');
      this.setState({teste: value});
    } catch (error) {
      this.setState({teste: 'erro'});
    }
  }

  navigate = () => {
    this.props.navigation.navigate('ProductDetail', {
      productName: this.props.product.name,
      productDescription: this.props.product.description,
      productPrice: this.props.product.price
    });
  }

  render(){
    const product = this.props.product;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.navigate()}>
          <View style={styles.cardHeader}>
            <Image source={require('../assets/react_native.png')} style={styles.imgProduct} />
            <Text>
            {product.name.length < 18 ? 
                product.name : product.name.substring(0, 15) + '...'}
            </Text>
          </View>
          <Text> 
            {product.description.length < 25 ? 
                product.description : product.description.substring(0, 25) + '...'}
          </Text>

          <Text style={{fontWeight: 'bold'}}>Preço: 
            <Text style={{fontWeight: 'normal'}}>{product.price}</Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => this.addProduct()}>
              <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
          <Text>{this.state.teste}</Text>
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
    paddingRight: 7,
    height: screen_height/3,
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
