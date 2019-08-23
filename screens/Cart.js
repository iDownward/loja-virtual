import React from 'react';
import { Text, View, TouchableOpacity, FlatList, Modal, ToastAndroid,
        ScrollView, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import CardProduct from '../components/CardProductCart';
import CardSelector from '../components/CardSelector';

export default class Cart extends React.Component {

  static cart = [];

  static navigationOptions = {
    title: 'Carrinho'
  }

  constructor(props){
      super(props);
      this.state = {
          listProducts: [],
          modalVisible: false
      }
  }

  componentDidMount = () => {
      try{
        const listProducts = Cart.getCart();
        if (listProducts) {
            this.setState({listProducts});
        }
      }
      catch(error) {
        this.setState({listProducts: []});
      }
  } 

  static setCart = (cart) => {
    Cart.cart = cart;
  }

  static getCart = () => Cart.cart;

  resetCart = () => {
    AsyncStorage.removeItem('cart');
    this.setState({listProducts: [], modalVisible: false});
    Cart.setCart([]);
    ToastAndroid.show('Compra realizada!', ToastAndroid.SHORT);
    
  }

  openModal = () => {
    this.setState({modalVisible: true});
  }

  static addProduct = (product) => {

      var found = false
      Cart.cart.map(item => {
        if(item._id === product._id) {
          item.quantity += 1;
          found = true;
          return;
        }
      });
      if(!found){
        product['quantity'] = 1;
        Cart.cart.push(product);
      }
      AsyncStorage.setItem('cart', JSON.stringify(Cart.cart));

  }

  static removeProduct = async (id) => {
    let listProducts = Cart.getCart();
    for(product of listProducts){
      if(product._id == id) {
          product.quantity -= 1;
          if(product.quantity == 0)
            listProducts.splice(listProducts.indexOf(product),1);
          break;
      }
    }
    await AsyncStorage.setItem('cart', JSON.stringify(listProducts));
    Cart.setCart(listProducts);
    
  }

  addCard(){
    this.setState({modalVisible: false});
    this.props.navigation.navigate('CardRegister');
  }
  
  render() {
    var total = 0.0;
    this.state.listProducts.map((item) => {
      total += item.price * item.quantity;
    });
    
    return (
      <ScrollView contentContainerStyle={styles.container}> 
          <Text style={styles.txtTotal}>Total: R$ {total.toFixed(2)}</Text>
          <Modal style={styles.modalContainer}
                 animationType={'slide'} 
                 visible={this.state.modalVisible}
                 transparent={true}
                 onRequestClose={_ => this.setState({modalVisible: false})} >

            <CardSelector addCard={_ => this.addCard()} finishPurchase={_ => this.resetCart()}/>
          </Modal>
          <View style={styles.list}>
            <FlatList
              data={this.state.listProducts}
              keyExtractor={item => item._id}
              renderItem={({item}) => 
                  <CardProduct 
                    product={item} 
                    navigation={this.props.navigation} 
                    removeProduct={_ => {
                      Cart.removeProduct(item._id);
                      this.setState({listProducts: Cart.getCart()});
                    }}
                    addProduct={_ => {
                      Cart.addProduct(item); 
                      this.setState({listProducts: Cart.getCart()});
                    }}
                  />
              }
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.openModal}>
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
    modalContainer: {
      alignSelf: 'center',
      justifyContent: 'center'
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
