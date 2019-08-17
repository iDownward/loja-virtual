import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

class ProductDetail extends React.Component {

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
      <ScrollView contentContainerStyle={styles.container}>   
        <View style= {styles.textos}>
          <Text><B>nome: </B>produto muito daora pra caramba selokooooooo</Text>
          <Text><B>Descricao: </B></Text>
          <Text><B>Tipo: </B></Text>
          <Text><B>Autoria principal: </B></Text>
          <Text><B>Local/Editora: </B></Text>
        </View>
        <Bibli />
      </ScrollView>
    );
  }
}

export default withNavigationFocus(MaterialDetalhe);
