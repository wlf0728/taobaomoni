import axios from 'axios';
axios.defaults.timeout = 500000;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

//post
export function post(url,parameter) {
  return axios({
    url: url,
    method:'post' ,
    data: parameter
  })
}
  
  //post method= {post | put}
export function httpAction(url,parameter,method) {
  return axios({
    url: url,
    method:method ,
    data: parameter
  })
}
  
  //put
export function put(url,parameter) {
  return axios({
    url: url,
    method:'put',
    data: parameter
  })
}
  
  //get
export function get(url,parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter
  })
}
