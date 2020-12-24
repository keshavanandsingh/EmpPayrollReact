const axios = require("axios");

class AxiosService {
  postService(url, payload = null, tokenRequired = false, httpOptions = null) {
    return axios
      .post(url, payload, tokenRequired && httpOptions)
      .then((response) => {
        console.log("Employee Added: \n" + response);
      })
      .catch((error) => console.error(error));
  }

  putService(url, payload = null, tokenRequired = false, httpOptions = null) {
    return axios.put(url, payload, tokenRequired && httpOptions);
  }
//putService(updateurl,updatedata){
//  return axios.put({
//  url: "http://localhost:8080/employee/update/5",
//  data:updatedata
//  })
//}

  deleteService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.delete(url, tokenRequired && httpOptions);
  }

  getService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.get(url, tokenRequired && httpOptions);
  }
}

module.exports = new AxiosService();
