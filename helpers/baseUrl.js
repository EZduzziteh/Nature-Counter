import { Platform } from 'react-native';

const baseUrl = Platform.OS === 'android'
  ? 'http://10.0.2.2:3000/'
  : 'http://localhost:3000/';

// const baseUrl = 'http://10.0.2.2:5000/';
// const baseUrl = 'https://ad973f2adfb39eab0.awsglobalaccelerator.com/'
// const baseUrl = 'http://18.118.197.111/'

export default baseUrl;
