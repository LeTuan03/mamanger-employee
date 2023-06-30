import axios from "axios";

import ConstantList from "../../appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api/";

//employees

export const searchByPage = async (data) => {
    const response = await axios.post(API_PATH + "employees/page", {
        keyword: data,
    });
    return response?.data?.data?.content;
};

export const getEmployees = async () => {
    const response = await axios.get(API_PATH + "employees/all");
    return response.data;
};

export const addEmployee = async (data) => {
    const response = await axios.post(API_PATH + "employees", data);
    return response.data;
};

export const editEmployee = (id, data) => {
    return axios.put(API_PATH + "employees/" + id, data);
};

export const deleteEmployee = (id) => {
    return axios.delete(API_PATH + "employees/" + id);
};

//address

//provinces
export const getProvinces = async () => {
    const response = await axios.get(API_PATH + "provinces/all");
    return response.data;
};
export const addProvinces = async (data) => {
    const response = await axios.post(API_PATH + "provinces", data);
    return response.data;
};
export const editProvinces = async (id, data) => {
    const response = axios.put(API_PATH + "provinces/" + id, data);
    return response;
};
export const deleteProvinces = async (id) => {
    const response = await axios.delete(API_PATH + "provinces/" + id);
    return response.data;
};

//districts
export const getDistrictsById = async (id) => {
    const response = await axios.get(`${API_PATH}provinces/${id}/districts`);
    return response.data;
};
export const getDistricts = async () => {
    const response = await axios.get(API_PATH + "districts/all");
    return response.data;
};
export const addDistricts = async (data) => {
    const response = await axios.post(API_PATH + "districts", data);
    return response.data;
};
export const editDistricts = async (id, data) => {
    const response = await axios.put(API_PATH + "districts/" + id, data);
    return response;
};
export const deleteDistricts = async (id) => {
    const response = await axios.delete(API_PATH + "districts/" + id);
    return response.data;
};
//wards
export const getWards = async () => {
    const response = await axios.get(API_PATH + "wards/all");
    return response.data;
};
export const addWards = async (data) => {
    const response = await axios.post(API_PATH + "wards", data);
    return response.data;
};
export const editWards = async (id, data) => {
    const response = await axios.put(API_PATH + "wards/" + id, data);
    return response;
};
export const deleteWards = async (id) => {
    const response = await axios.delete(API_PATH + "wards/" + id);
    return response.data;
};
export const getWardById = async (id) => {
    const response = await axios.get(API_PATH + "districts/" + id + "/wards");
    return response.data;
};
