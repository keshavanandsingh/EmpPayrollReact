import config from "../config/config";
import AxiosService from "../services/axios-service.js";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  tokenRequired = false;
  httpOptions = null;

  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}employees`, data);
  }
  updateEmployee(data) {
    return AxiosService.putService(`${this.baseUrl}update/${data.id}`, data);
  }
  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}employees`);
  }
  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}employees/${id}`);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}employee/delete/${id}`);
  }
}
