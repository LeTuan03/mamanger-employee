import {
    ADD_WARD_FAILURE,
    ADD_WARD_SUCCESS,
    DELETE_WARD_FAILURE,
    DELETE_WARD_SUCCESS,
    FETCH_WARD_BY_DISTRICTID_FAILURE,
    FETCH_WARD_BY_DISTRICTID_SUCCESS,
    FETCH_WARD_FAILURE,
    FETCH_WARD_SUCCESS,
    UPDATE_WARD_FAILURE,
    UPDATE_WARD_SUCCESS,
} from "../actions/WardsActions";

const initialState = {
    wards: [],
    error: null,
};

const WardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WARD_SUCCESS:
            return {
                ...state,
                wards: action.payload,
                error: null,
            };
        case FETCH_WARD_FAILURE:
        case ADD_WARD_FAILURE:
        case UPDATE_WARD_FAILURE:
        case DELETE_WARD_FAILURE:
        case FETCH_WARD_BY_DISTRICTID_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_WARD_SUCCESS:
            return {
                ...state,
                wards: [...state.wards, action.payload],
                error: null,
            };
        case UPDATE_WARD_SUCCESS:
            return {
                ...state,
                wards: state.wards.map((WARD) =>
                    WARD.id === action.payload.data.id
                        ? action.payload.data
                        : WARD
                ),
                error: null,
            };
        case DELETE_WARD_SUCCESS:
            return {
                ...state,
                wards: state.wards.filter((WARD) => WARD.id !== action.payload),
                error: null,
            };
        case FETCH_WARD_BY_DISTRICTID_SUCCESS:
            return {
                ...state,
                wards: action.payload,
                error: null,
            };
        default:
            return state;
    }
};

export default WardReducer;
