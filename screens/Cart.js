import React from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import CardProduct from '../components/CardProductCart';
import Home from './Home';

export default class Cart extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          products: []
      }
  }
  
  static navigationOptions = {
      title: 'Carrinho',
  }

  componentDidMount = async () => {
      try{
        const products = await AsyncStorage.getItem('cart');
        if (products) {
            this.setState({products: JSON.parse(products)});
        }
      }
      catch(error) {
        this.setState({products: []});
      }
    
  } 

  resetCart = () => {
    AsyncStorage.clear();
    this.setState({products: []});
    this.props.navigation.getParam('eraseCart', '')();
  }

  removeProduct = (id) => {
    let products = this.state.products;
    for(product of products){
      if(product._id == id) {
          products.splice(products.indexOf(product),1);
          break;
      }
    }
    this.setState({products});
  }
  
  render() {
    var total = 0.0;
    this.state.products.map((item) => {
      total += item.price * item.quantity;
    });
    return (
      <ScrollView contentContainerStyle={styles.container}> 
          <Text style={styles.txtTotal}>Total: R$ {total.toFixed(2)}</Text>
          <View style={styles.list}>
            <FlatList
              data={this.state.products}
              keyExtractor={item => item._id}
              renderItem={({item}) => 
                  <CardProduct product={item} navigation={this.props.navigation} removeProduct={_ => this.removeProduct(item._id)}/>
              }
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.resetCart}>
             <Text style={styles.btnText}>Finalizar Compra</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
      alignContent: 'center'
    },
    list: {
      height: screen_height/1.7
    },
    button: {
      backgroundColor: '#F00',
      marginTop: 'auto',
      width: '80%',
      height: screen_height/14,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    btnText: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 20
    },
    txtTotal: {
      fontSize: 40,
      alignSelf: 'center',
      marginVertical: 12
    }
});
