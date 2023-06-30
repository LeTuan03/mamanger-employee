// ProvinceSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    ADD_PROVINCE,
    DELETE_PROVINCE,
    FETCH_PROVINCE,
    UPDATE_PROVINCE,
    addProvinceSuccess,
    deleteProvinceFailure,
    deleteProvinceSuccess,
    fetchProvincesFailure,
    fetchProvincesSuccess,
    updateProvinceFailure,
    updateProvinceSuccess,
} from "../actions/ProvincesActions";
import { addEmployeeFailure } from "../actions/EmployeesActions";
import {
    getProvinces,
    addProvinces,
    deleteProvinces,
    editProvinces,
} from "../api/employeesApi";

function* fetchProvinceSaga() {
    const response = yield call(getProvinces);
    if (response.code === 200) {
        yield put(fetchProvincesSuccess(response.data));
    } else {
        yield put(fetchProvincesFailure(response.message));
    }
}

function* addProvinceSaga(action) {
    const response = yield call(addProvinces, action.payload);
    if (response.code === 200 || response.status === 200) {
        yield put(addProvinceSuccess(response.data));
        toast.success(response.message, { autoClose: 1000 });
    } else {
        yield put(addEmployeeFailure(response.message));
        toast.error(response.message, { autoClose: 1000 });
    }
}

function* updateProvinceSaga(action) {
    try {
        const response = yield call(
            editProvinces,
            action.payload.id,
            action.payload.province
        );
        yield put(updateProvinceSuccess(response.data));
        toast.success(response.data.message, { autoClose: 1000 });
    } catch (error) {
        yield put(updateProvinceFailure(error));
        toast.error(error, { autoClose: 1000 });
    }
}

function* deleteProvinceSaga(action) {
    try {
        const response = yield call(deleteProvinces, action.payload);
        yield put(deleteProvinceSuccess(action.payload));
        toast.success(response.message, { autoClose: 1000 });
    } catch (error) {
        yield put(deleteProvinceFailure(error));
        toast.error("Lỗi xóa tỉnh", { autoClose: 1000 });
    }
}
function* provinceSaga() {
    yield takeLatest(FETCH_PROVINCE, fetchProvinceSaga);
    yield takeLatest(ADD_PROVINCE, addProvinceSaga);
    yield takeLatest(DELETE_PROVINCE, deleteProvinceSaga);
    yield takeLatest(UPDATE_PROVINCE, updateProvinceSaga);
}

export default provinceSaga;
