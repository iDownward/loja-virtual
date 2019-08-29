import React from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import API from '../API'

export default class CardSelector extends React.Component {

  state = {
    listCards: []
  }

  async componentDidMount(){
    const listCards = await API.getCards();
    this.setState({listCards});
  }

  render() {
    return (
            <View style={styles.modalContainer}>
              <View style={styles.header}>
                <Text>Escolha a forma de pagamento</Text>
              </View>
              {this.state.listCards.length == [] ?
              <Text>Adicione uma forma de pagamento</Text>
              :
              <FlatList
                  data={this.state.listCards}
                  keyExtractor={(item) => item.numero}
                  renderItem={({item}) => 
                    <TouchableOpacity onPress={this.props.finishPurchase} style={styles.btnCard}>
                      <Image source={require('../assets/card.png')} style={{width: 20, height: 20}}/>
                      <Text> {item.numero}</Text>
                    </TouchableOpacity>
                  }
              />
              }
              <TouchableOpacity style={styles.btnFinish} onPress={this.props.addCard}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>
    );
  }
}

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: screen_height/3,
    alignItems: 'center',
    width: screen_width/1.5,
    alignSelf: 'center',
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth
  },
  header: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  btnFinish: {
      marginTop: 'auto',
      marginBottom: 5,
      width: '50%',
      height: screen_height/15,
      alignSelf: 'center',
      justifyContent: 'center'
  },
  btnText: {
      textAlign: 'center',
      color: '#BBB',
      fontWeight: 'bold',
      fontSize: 30
  },
  btnCard: {
    marginVertical: 5,
    flexDirection: 'row'
  }
});
