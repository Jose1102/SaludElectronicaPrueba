import axios from "axios";

const EMPLOYEE_ALL = "http://localhost:3000/empleados";

class EmployeeService {
  getUsers() {
    return axios.get(EMPLOYEE_ALL);
  }
}

export default new EmployeeService();
