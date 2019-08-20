import React, {Fragment} from 'react';
import API from '../API';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import CardProduct from '../components/CardProductHome';

class Home extends React.Component{
  static navigationOptions = ({navigation}) => {
      return {
        title: 'Loja Virtual',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/cart.png')} style={styles.imgCart} />
          </TouchableOpacity>
        )
      };
  }

  constructor(props){
    super(props);

    this.state = {
      products: [],
      cart: []
    }
  }

  addProduct = (product) => {
    try {
      var found = false
      this.state.cart.map(item => {
        if(item._id === product._id) {
          item.quantity += 1;
          found = true;
        }
      });
      if(!found){
        product['quantity'] = 1;
        this.state.cart.push(product);
      }
      AsyncStorage.setItem('cart', JSON.stringify(this.state.cart));
    } catch (error) {}
  }

  async componentDidMount(){
    const products = await API.getProducts();
    const cart = await API.getCart();
    let aux = [];
    for(let i = 1; i < products.length; i++){  //apagar depois
      aux.push(products[i]);
    }
    this.setState({
      products: aux, cart
    });
  }

  render(){
    return (
      <Fragment>
        <SafeAreaView>
        <Image source={require('../assets/company_logo.jpg')} style={styles.imgLogo}/>
        <Text>Produtos</Text>
        {this.state.products.length > 0 ?
          <FlatList horizontal={true}
            data={this.state.products}
            keyExtractor={item => item._id}
            renderItem={({item}) => 
              <CardProduct
                product={item}
                navigation={this.props.navigation}
                addProduct={_ => this.addProduct(item)}
              />
            }
          />
          :
          <Text>Carregando... Ou deu erro</Text> 
        }
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  imgLogo: {
    alignSelf: 'center'
  },
  imgCart: {
      width: 30,
      height: 30,
  }
});

export default Home;
