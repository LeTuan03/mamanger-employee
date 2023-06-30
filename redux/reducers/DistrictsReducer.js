import {
    ADD_DISTRICT_FAILURE,
    ADD_DISTRICT_SUCCESS,
    DELETE_DISTRICT_FAILURE,
    DELETE_DISTRICT_SUCCESS,
    FETCH_DISTRICT_BY_PROVINCE_ID_FAILURE,
    FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS,
    FETCH_DISTRICT_FAILURE,
    FETCH_DISTRICT_SUCCESS,
    UPDATE_DISTRICT_FAILURE,
    UPDATE_DISTRICT_SUCCESS,
} from "../actions/DistrictsActions";

const initialState = {
    districts: [],
    error: null,
};

const DistrictReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISTRICT_SUCCESS:
            return {
                ...state,
                districts: action.payload,
                error: null,
            };
        case FETCH_DISTRICT_FAILURE:
        case ADD_DISTRICT_FAILURE:
        case UPDATE_DISTRICT_FAILURE:
        case DELETE_DISTRICT_FAILURE:
        case FETCH_DISTRICT_BY_PROVINCE_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_DISTRICT_SUCCESS:
            return {
                ...state,
                districts: [...state.districts, action.payload],
                error: null,
            };
        case UPDATE_DISTRICT_SUCCESS:
            return {
                ...state,
                districts: state.districts.map((DISTRICT) =>
                    DISTRICT.id === action.payload.data.id
                        ? action.payload.data
                        : DISTRICT
                ),
                error: null,
            };
        case DELETE_DISTRICT_SUCCESS:
            return {
                ...state,
                districts: state.districts.filter(
                    (DISTRICT) => DISTRICT.id !== action.payload
                ),
                error: null,
            };
        case FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS:
            return {
                ...state,
                districts: action.payload,
                error: null,
            };
        default:
            return state;
    }
};

export default DistrictReducer;
