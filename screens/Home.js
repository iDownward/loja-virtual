import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import CardProduct from '../components/CardProduct';

class Home extends React.Component{
  static navigationOptions = {
      title: 'Loja virtual',
  }

  constructor(){
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/iDownward/repos')
      .then(response => response.json())
      .then(json => this.setState({products: json}));
  }

  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <Text>Produtos</Text>
        <FlatList horizontal={true}
          data={this.state.products}
          keyExtractor={item => String(item.id)}
          renderItem={ ({item}) => 
            <CardProduct product={item} navigation={this.props.navigation}/>
          }
        />
        </SafeAreaView>
      </Fragment>
    );
  }
};

export default Home;
