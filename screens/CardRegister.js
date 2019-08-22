import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import CardProduct from '../components/CardProductCart';


export default class CardRegister extends React.Component {
  
  render() {
    
    return (
      <View>
        <TextInput style={styles.textinput}
            selectionColor="#9F6851"
            placeholder="Numero"
            underlineColorAndroid="#9F6851"
        />
      </View>
    );
  }
}

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
      alignContent: 'center'
    },
    textinput: {
      marginTop: 5,
      paddingBottom: 3,
      paddingLeft: 5,
      color: '#9F6851',
      fontSize: 20,
      fontStyle: 'normal'
    }

});
