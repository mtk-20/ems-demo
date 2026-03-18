import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080/api/employees";

export const getEmployees = () => axios.get(BASE_URL_EMPLOYEE);

export const createEmployees = (e) => axios.post(`${BASE_URL_EMPLOYEE}/create`, e);

export const getEmployeeId = (id) => axios.get(`${BASE_URL_EMPLOYEE}/by-id/` + id);

export const updateEmployee = (id, e) => axios.put(`${BASE_URL_EMPLOYEE}/update/` + id, e);

export const deleteEmployee = (id) => axios.delete(`${BASE_URL_EMPLOYEE}/delete/` + id);
