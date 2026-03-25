import axios from "axios";

const BASE_URL_DEPARTMENT = "http://localhost:8080/api/departments";

export const getDepartments = () => axios.get(BASE_URL_DEPARTMENT);

export const createDepartment = (d) => axios.post(`${BASE_URL_DEPARTMENT}/create`, d);

export const getDepartmentId = (id) => axios.get(`${BASE_URL_DEPARTMENT}/by-id/` + id);

export const updateDepartment = (id, d) => axios.put(`${BASE_URL_DEPARTMENT}/update/` + id, d);

export const deleteDepartment = (id) => axios.delete(`${BASE_URL_DEPARTMENT}/delete/` + id);