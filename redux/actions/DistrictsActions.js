export const FETCH_DISTRICT = "FETCH_DISTRICT";
export const FETCH_DISTRICT_SUCCESS = "FETCH_DISTRICT_SUCCESS";
export const FETCH_DISTRICT_FAILURE = "FETCH_DISTRICT_FAILURE";

export const FETCH_DISTRICT_BY_PROVINCE_ID = "FETCH_DISTRICT_BY_PROVINCE_ID";
export const FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS =
    "FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS";
export const FETCH_DISTRICT_BY_PROVINCE_ID_FAILURE =
    "FETCH_DISTRICT_BY_PROVINCE_ID_FAILURE";

export const ADD_DISTRICT = "ADD_DISTRICT";
export const ADD_DISTRICT_SUCCESS = "ADD_DISTRICT_SUCCESS";
export const ADD_DISTRICT_FAILURE = "ADD_DISTRICT_FAILURE";

export const UPDATE_DISTRICT = "UPDATE_DISTRICT";
export const UPDATE_DISTRICT_SUCCESS = "UPDATE_DISTRICT_SUCCESS";
export const UPDATE_DISTRICT_FAILURE = "UPDATE_DISTRICT_FAILURE";

export const DELETE_DISTRICT = "DELETE_DISTRICT";
export const DELETE_DISTRICT_SUCCESS = "DELETE_DISTRICT_SUCCESS";
export const DELETE_DISTRICT_FAILURE = "DELETE_DISTRICT_FAILURE";

export const fetchDistrict = () => ({
    type: FETCH_DISTRICT,
});

export const fetchDistrictSuccess = (District) => ({
    type: FETCH_DISTRICT_SUCCESS,
    payload: District,
});

export const fetchDistrictFailure = (error) => ({
    type: FETCH_DISTRICT_FAILURE,
    payload: error,
});

export const fetchDistrictByProvinceId = (id) => ({
    type: FETCH_DISTRICT_BY_PROVINCE_ID,
    payload: id,
});

export const fetchDistrictByProvinceIdSuccess = (id) => ({
    type: FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS,
    payload: id,
});

export const fetchDistrictByProvinceIdFailure = (error) => ({
    type: FETCH_DISTRICT_BY_PROVINCE_ID_FAILURE,
    payload: error,
});

export const addDistrict = (DISTRICT) => ({
    type: ADD_DISTRICT,
    payload: DISTRICT,
});

export const addDistrictSuccess = (DISTRICT) => ({
    type: ADD_DISTRICT_SUCCESS,
    payload: DISTRICT,
});

export const addDistrictFailure = (error) => ({
    type: ADD_DISTRICT_FAILURE,
    payload: error,
});

export const updateDistrict = (id, DISTRICT) => ({
    type: UPDATE_DISTRICT,
    payload: { id: id, district: DISTRICT },
});

export const updateDistrictSuccess = (DISTRICT) => ({
    type: UPDATE_DISTRICT_SUCCESS,
    payload: DISTRICT,
});

export const updateDistrictFailure = (error) => ({
    type: UPDATE_DISTRICT_FAILURE,
    payload: error,
});

export const deleteDistrict = (id) => ({
    type: DELETE_DISTRICT,
    payload: id,
});

export const deleteDistrictSuccess = (id) => ({
    type: DELETE_DISTRICT_SUCCESS,
    payload: id,
});

export const deleteDistrictFailure = (error) => ({
    type: DELETE_DISTRICT_FAILURE,
    payload: error,
});
