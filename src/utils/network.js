import axios from 'axios';

function callApi(requestConfig) {
  return axios(requestConfig);
}

export default callApi;
