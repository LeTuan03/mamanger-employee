export const FETCH_PROVINCE = "FETCH_PROVINCE";
export const FETCH_PROVINCE_SUCCESS = "FETCH_PROVINCE_SUCCESS";
export const FETCH_PROVINCE_FAILURE = "FETCH_PROVINCE_FAILURE";

export const ADD_PROVINCE = "ADD_PROVINCE";
export const ADD_PROVINCE_SUCCESS = "ADD_PROVINCE_SUCCESS";
export const ADD_PROVINCE_FAILURE = "ADD_PROVINCE_FAILURE";

export const UPDATE_PROVINCE = "UPDATE_PROVINCE";
export const UPDATE_PROVINCE_SUCCESS = "UPDATE_PROVINCE_SUCCESS";
export const UPDATE_PROVINCE_FAILURE = "UPDATE_PROVINCE_FAILURE";

export const DELETE_PROVINCE = "DELETE_PROVINCE";
export const DELETE_PROVINCE_SUCCESS = "DELETE_PROVINCE_SUCCESS";
export const DELETE_PROVINCE_FAILURE = "DELETE_PROVINCE_FAILURE";

export const fetchProvinces = () => ({
    type: FETCH_PROVINCE,
});

export const fetchProvincesSuccess = (Provinces) => ({
    type: FETCH_PROVINCE_SUCCESS,
    payload: Provinces,
});

export const fetchProvincesFailure = (error) => ({
    type: FETCH_PROVINCE_FAILURE,
    payload: error,
});

export const addProvince = (Province) => ({
    type: ADD_PROVINCE,
    payload: Province,
});

export const addProvinceSuccess = (Province) => ({
    type: ADD_PROVINCE_SUCCESS,
    payload: Province,
});

export const addProvinceFailure = (error) => ({
    type: ADD_PROVINCE_FAILURE,
    payload: error,
});

export const updateProvince = (id, Province) => ({
    type: UPDATE_PROVINCE,
    payload: { id: id, province: Province },
});

export const updateProvinceSuccess = (Province) => ({
    type: UPDATE_PROVINCE_SUCCESS,
    payload: Province,
});

export const updateProvinceFailure = (error) => ({
    type: UPDATE_PROVINCE_FAILURE,
    payload: error,
});

export const deleteProvince = (id) => ({
    type: DELETE_PROVINCE,
    payload: id,
});

export const deleteProvinceSuccess = (id) => ({
    type: DELETE_PROVINCE_SUCCESS,
    payload: id,
});

export const deleteProvinceFailure = (error) => ({
    type: DELETE_PROVINCE_FAILURE,
    payload: error,
});
