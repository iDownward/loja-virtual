/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CardProduct from './components/CardProduct';

class App extends React.Component{

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
        <Text style={styles.title}>Loja Virtual</Text>
        <Text>Prodcutos</Text>
        <FlatList horizontal={true}
          data={this.state.products}
          keyExtractor={item => String(item.id)}
          renderItem={ ({item}) => 
            <CardProduct product={item}/>
          }
        />
        </SafeAreaView>
      </Fragment>
    );
  }
};

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: screen_height/5
  }
});

export default App;
