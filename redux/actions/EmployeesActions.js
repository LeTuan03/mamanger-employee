// employeesActionTypes.js
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_FAILURE = "FETCH_EMPLOYEES_FAILURE";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
export const ADD_EMPLOYEE_FAILURE = "ADD_EMPLOYEE_FAILURE";

export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAILURE = "DELETE_EMPLOYEE_FAILURE";

export const SEARCH_EMPLOYEE = "SEARCH_EMPLOYEE";
export const SEARCH_EMPLOYEE_SUCCESS = "SEARCH_EMPLOYEE_SUCCESS";
export const SEARCH_EMPLOYEE_FAILURE = "SEARCH_EMPLOYEE_FAILURE";

export const fetchEmployees = () => ({
    type: FETCH_EMPLOYEES,
});

export const fetchEmployeesSuccess = (employees) => ({
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees,
});

export const fetchEmployeesFailure = (error) => ({
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error,
});

export const addEmployee = (employee) => ({
    type: ADD_EMPLOYEE,
    payload: employee,
});

export const addEmployeeSuccess = (employee) => ({
    type: ADD_EMPLOYEE_SUCCESS,
    payload: employee,
});

export const addEmployeeFailure = (error) => ({
    type: ADD_EMPLOYEE_FAILURE,
    payload: error,
});

export const updateEmployee = (id, employee) => ({
    type: UPDATE_EMPLOYEE,
    payload: { id, employee },
});

export const updateEmployeeSuccess = (employee) => ({
    type: UPDATE_EMPLOYEE_SUCCESS,
    payload: employee,
});

export const updateEmployeeFailure = (error) => ({
    type: UPDATE_EMPLOYEE_FAILURE,
    payload: error,
});

export const deleteEmployee = (id) => ({
    type: DELETE_EMPLOYEE,
    payload: id,
});

export const deleteEmployeeSuccess = (id) => ({
    type: DELETE_EMPLOYEE_SUCCESS,
    payload: id,
});

export const deleteEmployeeFailure = (error) => ({
    type: DELETE_EMPLOYEE_FAILURE,
    payload: error,
});

export const searchEmployees = (employee) => ({
    type: SEARCH_EMPLOYEE,
    payload: employee,
});

export const searchEmployeeSuccess = (employee) => ({
    type: SEARCH_EMPLOYEE_SUCCESS,
    payload: employee,
});

export const searchEmployeeFailure = (error) => ({
    type: SEARCH_EMPLOYEE_FAILURE,
    payload: error,
});
