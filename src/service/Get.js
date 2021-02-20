import axios from 'axios';
import Config from './Config';

const Get = path => {
  const promise = new Promise((resolve, reject) => {
    axios.get(Config.urlAPI + path)
    .then((result) => {
      resolve(result);
    }, (err) => {
      reject(err);
    })
  })
  return promise;
}

export default Get;