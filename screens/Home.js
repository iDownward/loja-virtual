import React, {Fragment} from 'react';
import Axios from 'react-native-axios';
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import CardProduct from '../components/CardProduct';

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
      products: []
    }

    this.cart = [];
  }

  addProduct = (product) => {
    try {
      this.cart.push(product);
      AsyncStorage.setItem('cart', JSON.stringify(this.cart));
    } catch (error) {
      // this.setState({teste: 'erro'});
    }
  }

  async componentDidMount(){
    await this.getProducts();
    await this.getCart();
  }

  async getProducts() {
    try {
      const response = await Axios.get('http://9.232.24.93:8080/api/product')
      this.setState({products: response.data});
    } catch (err) {
      this.setState({products: []})
    }
  }

  async getCart() {
    const list = await AsyncStorage.getItem('cart');
    this.cart = list ? JSON.parse(list) : [];
  }

  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <Text>Produtos</Text>
        {this.state.products.length > 0 ?
          <FlatList horizontal={true}
            data={this.state.products}
            keyExtractor={item => String(item.id)}
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
  imgCart: {
      width: 30,
      height: 30,
  }
});

export default Home;
