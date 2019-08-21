import Axios from 'react-native-axios';


export default class API{

  //Fiz uma gambiarra com uma API q eu tinha ja hospedada (provisoriamente)
  static async getProducts() {
    try {
      const response = await Axios.get('https://joguindavelha.mybluemix.net/api');
      return response.data;
    } catch (err) {
      return [];
    }
  }

};
