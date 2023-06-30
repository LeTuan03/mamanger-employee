import {
    ADD_PROVINCE_FAILURE,
    ADD_PROVINCE_SUCCESS,
    DELETE_PROVINCE_FAILURE,
    DELETE_PROVINCE_SUCCESS,
    FETCH_PROVINCE_FAILURE,
    FETCH_PROVINCE_SUCCESS,
    UPDATE_PROVINCE_FAILURE,
    UPDATE_PROVINCE_SUCCESS,
} from "../actions/ProvincesActions";

const initialState = {
    provinces: [],
    error: null,
};

const ProvinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROVINCE_SUCCESS:
            return {
                ...state,
                provinces: action.payload,
                error: null,
            };
        case FETCH_PROVINCE_FAILURE:
        case ADD_PROVINCE_FAILURE:
        case UPDATE_PROVINCE_FAILURE:
        case DELETE_PROVINCE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_PROVINCE_SUCCESS:
            return {
                ...state,
                provinces: [...state.provinces, action.payload],
                error: null,
            };
        case UPDATE_PROVINCE_SUCCESS:
            return {
                ...state,
                provinces: state.provinces.map((PROVINCE) =>
                    PROVINCE.id === action.payload.data.id
                        ? action.payload.data
                        : PROVINCE
                ),
                error: null,
            };
        case DELETE_PROVINCE_SUCCESS:
            return {
                ...state,
                provinces: state.provinces.filter(
                    (PROVINCE) => PROVINCE.id !== action.payload
                ),
                error: null,
            };
        default:
            return state;
    }
};

export default ProvinceReducer;
