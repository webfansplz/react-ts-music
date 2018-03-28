import axios from 'axios';
//拼接请求Url
function formatUrl(url) {
  return `${config.apiHost}${url}`;
}
//封装请求方法
function formatReq(type, url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: formatUrl(url),
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }).then(r => r);
  });
}
const Http = {
  get: url => axios.get(formatUrl(url)).then(r => r),
  post: (url, data) => formatReq('post', url, data),
  put: (url, data) => formatReq('put', url, data),
  patch: (url, data) => formatReq('patch', url, data),
  delete: (url, data) => formatReq('delete', url, data)
};
export default Http;
