import React from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView, StyleSheet, AsyncStorage, Dimensions } from 'react-native';

export default class CardSelector extends React.Component {
  

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text>Escolha a forma de pagamento</Text>
        </View>
        <Text>Adicione uma forma de pagamento</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: screen_width/1.5,
      height: screen_height/5,
      alignSelf: 'center',
      backgroundColor: '#EEE',
      position: 'absolute',
      borderColor: '#000',
      borderWidth: StyleSheet.hairlineWidth
    },
    header: {
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
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
    }

});
