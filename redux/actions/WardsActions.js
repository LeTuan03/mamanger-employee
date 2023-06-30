export const FETCH_WARD = "FETCH_WARD";
export const FETCH_WARD_SUCCESS = "FETCH_WARD_SUCCESS";
export const FETCH_WARD_FAILURE = "FETCH_WARD_FAILURE";

export const FETCH_WARD_BY_DISTRICTID = "FETCH_WARD_BY_DISTRICTID";
export const FETCH_WARD_BY_DISTRICTID_SUCCESS =
    "FETCH_WARD_BY_DISTRICTID_SUCCESS";
export const FETCH_WARD_BY_DISTRICTID_FAILURE =
    "FETCH_WARD_BY_DISTRICTID_FAILURE";

export const ADD_WARD = "ADD_WARD";
export const ADD_WARD_SUCCESS = "ADD_WARD_SUCCESS";
export const ADD_WARD_FAILURE = "ADD_WARD_FAILURE";

export const UPDATE_WARD = "UPDATE_WARD";
export const UPDATE_WARD_SUCCESS = "UPDATE_WARD_SUCCESS";
export const UPDATE_WARD_FAILURE = "UPDATE_WARD_FAILURE";

export const DELETE_WARD = "DELETE_WARD";
export const DELETE_WARD_SUCCESS = "DELETE_WARD_SUCCESS";
export const DELETE_WARD_FAILURE = "DELETE_WARD_FAILURE";

export const fetchWard = () => ({
    type: FETCH_WARD,
});

export const fetchWardSuccess = (Ward) => ({
    type: FETCH_WARD_SUCCESS,
    payload: Ward,
});

export const fetchWardFailure = (error) => ({
    type: FETCH_WARD_FAILURE,
    payload: error,
});
export const fetchWardByDistrictId = (id) => ({
    type: FETCH_WARD_BY_DISTRICTID,
    payload: id,
});

export const fetchWardByDistrictIdSuccess = (id) => ({
    type: FETCH_WARD_BY_DISTRICTID_SUCCESS,
    payload: id,
});

export const fetchWardByDistrictIdFailure = (error) => ({
    type: FETCH_WARD_BY_DISTRICTID_FAILURE,
    payload: error,
});

export const addWard = (WARD) => ({
    type: ADD_WARD,
    payload: WARD,
});

export const addWardSuccess = (WARD) => ({
    type: ADD_WARD_SUCCESS,
    payload: WARD,
});

export const addWardFailure = (error) => ({
    type: ADD_WARD_FAILURE,
    payload: error,
});

export const updateWard = (id, WARD) => ({
    type: UPDATE_WARD,
    payload: { id: id, ward: WARD },
});

export const updateWardSuccess = (WARD) => ({
    type: UPDATE_WARD_SUCCESS,
    payload: WARD,
});

export const updateWardFailure = (error) => ({
    type: UPDATE_WARD_FAILURE,
    payload: error,
});

export const deleteWard = (id) => ({
    type: DELETE_WARD,
    payload: id,
});

export const deleteWardSuccess = (id) => ({
    type: DELETE_WARD_SUCCESS,
    payload: id,
});

export const deleteWardFailure = (error) => ({
    type: DELETE_WARD_FAILURE,
    payload: error,
});
