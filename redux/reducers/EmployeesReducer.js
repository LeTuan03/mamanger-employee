// employeesReducer.js
import {
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
    SEARCH_EMPLOYEE_FAILURE,
    SEARCH_EMPLOYEE_SUCCESS,
} from "../actions/EmployeesActions";

const initialState = {
    employees: [],
    error: null,
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                error: null,
            };
        case FETCH_EMPLOYEES_FAILURE:
        case ADD_EMPLOYEE_FAILURE:
        case UPDATE_EMPLOYEE_FAILURE:
        case DELETE_EMPLOYEE_FAILURE:
        case SEARCH_EMPLOYEE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, action.payload],
                error: null,
            };
        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.map((employee) =>
                    employee.id === action.payload.id
                        ? action.payload
                        : employee
                ),
                error: null,
            };
        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(
                    (employee) => employee.id !== action.payload
                ),
                error: null,
            };
        case SEARCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                error: null,
            };
        default:
            return state;
    }
};

export default employeesReducer;
