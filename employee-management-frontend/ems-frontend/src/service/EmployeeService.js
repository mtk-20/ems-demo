import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = () => axios.get(BASE_URL);

export const createEmployees = (e) => axios.post(`${BASE_URL}/create`, e);

export const getEmployeeId = (id) => axios.get(`${BASE_URL}/by-id/` + id);

export const updateEmployee = (id, e) => axios.put(`${BASE_URL}/update/` + id, e);

export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/delete/` + id);
