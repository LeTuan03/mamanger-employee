// employeesSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    FETCH_EMPLOYEES,
    ADD_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployeeSuccess,
    addEmployeeFailure,
    updateEmployeeSuccess,
    updateEmployeeFailure,
    deleteEmployeeSuccess,
    deleteEmployeeFailure,
    SEARCH_EMPLOYEE,
    searchEmployeeSuccess,
} from "../actions/EmployeesActions";
import {
    getEmployees,
    addEmployee,
    deleteEmployee,
    editEmployee,
    searchByPage,
} from "../api/employeesApi";

function* fetchEmployeesSaga() {
    const response = yield call(getEmployees);
    if (response.code === 200) {
        yield put(fetchEmployeesSuccess(response.data));
    } else {
        yield put(fetchEmployeesFailure(response.message));
    }
}

function* addEmployeeSaga(action) {
    const response = yield call(addEmployee, action.payload);
    if (response.code === 200) {
        yield put(addEmployeeSuccess(response.data));
        toast.success(response.message, { autoClose: 1000 });
    } else {
        yield put(addEmployeeFailure(response.message));
        toast.error(response.message, { autoClose: 1000 });
    }
}

function* updateEmployeeSaga(action) {
    const response = yield call(
        editEmployee,
        action.payload.id,
        action.payload.employee
    );
    if (response.data.code === 200) {
        yield put(updateEmployeeSuccess(response.data.data));
        toast.success(response.data.message, { autoClose: 1000 });
    } else {
        yield put(updateEmployeeFailure(response.data.message));
        toast.error(response.data.message, { autoClose: 1000 });
    }
}

function* deleteEmployeeSaga(action) {
    const response = yield call(deleteEmployee, action.payload);
    if (response.data.code === 200) {
        yield put(deleteEmployeeSuccess(action.payload));
        toast.success(response.data.message, { autoClose: 1000 });
    } else {
        yield put(deleteEmployeeFailure(response.message));
        toast.success(response.message, { autoClose: 1000 });
    }
}
function* searchEmployeeSaga(action) {
    const response = yield call(searchByPage, action.payload);
    console.log(response);
    yield put(searchEmployeeSuccess(response));
}
function* employeesSaga() {
    yield takeLatest(FETCH_EMPLOYEES, fetchEmployeesSaga);
    yield takeLatest(ADD_EMPLOYEE, addEmployeeSaga);
    yield takeLatest(UPDATE_EMPLOYEE, updateEmployeeSaga);
    yield takeLatest(DELETE_EMPLOYEE, deleteEmployeeSaga);
    yield takeLatest(SEARCH_EMPLOYEE, searchEmployeeSaga);
}

export default employeesSaga;
