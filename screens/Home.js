import React, {Fragment} from 'react';
import Axios from 'react-native-axios';
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
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

  constructor(){
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    Axios.get('http://9.232.24.93:8080/api/product')
      .then(response => this.setState({products: response.data}))
      .catch(err => this.setState({products: []}));
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
            renderItem={ ({item}) => 
              <CardProduct product={item} navigation={this.props.navigation}/>
            }
          />
          :
          <Text>Erroooooou</Text> 
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
