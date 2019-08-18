import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, AsyncStorage } from 'react-native';

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
  
  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}> 
        <View>
          <FlatList
            data={this.state.products}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => 
              <Text>{item.name}</Text>
            }
          />
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    }
});
