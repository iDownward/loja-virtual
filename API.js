import Axios from 'react-native-axios';
import {
  AsyncStorage
} from 'react-native';


export default class API{

  //Fiz uma gambiarra com uma API q eu tinha ja hospedada (provisoriamente)
  static async getProducts() {
    try {
      const response = await Axios.get('https://joguindavelha.mybluemix.net/api');
      console.log(response.data);
      return response.data;
    } catch (err) {
      return [];
    }
  }

  static async getCart() {
    const list = await AsyncStorage.getItem('cart');
    return list ? JSON.parse(list) : [];
  }

};
