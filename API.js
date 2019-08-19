import Axios from 'react-native-axios';
import {
  AsyncStorage
} from 'react-native';


export default class API{

  static async getProducts() {
    try {
      const response = await Axios.get('https://api.github.com/users/iDownward/repos');
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
