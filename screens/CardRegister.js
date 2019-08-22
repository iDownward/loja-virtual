import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, StyleSheet, AsyncStorage, Dimensions } from 'react-native';

export default class CardRegister extends React.Component {

  static cards = [];

  static getCards = () => CardRegister.cards;

  static setCards(cards){
    CardRegister.cards = cards;
  }

  static navigationOptions = {
    title: 'Cadastrar cartao'
  }

  state = {
    numero: 'none',
    data: '',
    cvv: '',
    titular: ''
  }

  async saveCard(){
    CardRegister.cards.push(this.state);
    await AsyncStorage.setItem('cards', JSON.stringify(CardRegister.getCards()));
  }
  
  render() {
    
    return (
      <ScrollView contentContainerStyle={styles.container}>

          <View>
            <Text style={styles.label}>Numero do cartao: </Text>
            <TextInput style={[styles.textInput, styles.textInputLarge]} 
              keyboardType="number-pad"
              maxLength={16}
              onChangeText={(text) => { this.setState({numero: text})}}/>
          </View>
          <View style={styles.row}>
            <View style={{flex: 1}}>
            <Text style={styles.label}>Data: </Text>
            <TextInput style={[styles.textInput, styles.textInputSmall]} 
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={(text) => { this.setState({data: text})}}/>
              </View>
              <View style={{flex: 1}}>
            <Text style={styles.label}>CVV: </Text>
            <TextInput style={[styles.textInput, styles.textInputSmall]}
                keyboardType="number-pad"
                onChangeText={(text) => { this.setState({cvv: text})}} />
                </View>
          </View>
          <View>
            <Text style={styles.label}>titular: </Text>
            <TextInput style={[styles.textInput, styles.textInputLarge]} 
                onChangeText={(text) => { this.setState({titular: text})}}/>
          </View>

        <TouchableOpacity style={styles.button} onPress={_ => this.saveCard()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container:{
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    marginTop: screen_height/8,
    borderRadius: 10,
    borderColor: '#789',
    borderWidth: 0.5
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screen_width/1.8
  },

  textInput: {
    height: 40,
    paddingLeft: 5,
    borderWidth: 0.2,
    borderColor: '#789',
  },

  textInputLarge: {
    width: screen_width/1.8,
    marginBottom: '5%'
  },

  textInputSmall: {
    flex:1
  },

  label:{
    marginTop: '5%',
    fontSize: 15
  },

  button: {
    width: '30%',
    height: 30,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 30
  },

  buttonText: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});
