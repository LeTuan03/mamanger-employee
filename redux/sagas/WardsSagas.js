// WardSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    addWards,
    deleteWards,
    editWards,
    getWardById,
    getWards,
} from "../api/employeesApi";
import {
    ADD_WARD,
    DELETE_WARD,
    FETCH_WARD,
    FETCH_WARD_BY_DISTRICTID,
    UPDATE_WARD,
    addWardFailure,
    addWardSuccess,
    deleteWardFailure,
    deleteWardSuccess,
    fetchWardByDistrictIdFailure,
    fetchWardByDistrictIdSuccess,
    fetchWardFailure,
    fetchWardSuccess,
    updateWardFailure,
    updateWardSuccess,
} from "../actions/WardsActions";

function* fetchWardSaga() {
    const response = yield call(getWards);
    if (response.code === 200) {
        yield put(fetchWardSuccess(response.data));
    } else {
        yield put(fetchWardFailure(response.message));
    }
}

function* addWardSaga(action) {
    const response = yield call(addWards, action.payload);
    if (response.code === 200 || response.status === 200) {
        yield put(addWardSuccess(response.data));
        toast.success(response.message, { autoClose: 1000 });
    } else {
        yield put(addWardFailure(response.message));
        toast.error(response.message, { autoClose: 1000 });
    }
}

function* updateWardSaga(action) {
    try {
        const response = yield call(
            editWards,
            action.payload.id,
            action.payload.ward
        );
        yield put(updateWardSuccess(response.data));
        toast.success(response.data.message, { autoClose: 1000 });
    } catch (error) {
        yield put(updateWardFailure(error));
        toast.error(error, { autoClose: 1000 });
    }
}

function* deleteWardSaga(action) {
    try {
        const response = yield call(deleteWards, action.payload);
        yield put(deleteWardSuccess(action.payload));
        toast.success(response.message, { autoClose: 1000 });
    } catch (error) {
        yield put(deleteWardFailure(error));
        toast.error(error, { autoClose: 1000 });
    }
}
function* fetchWardByDistrictIdSaga(action) {
    try {
        const response = yield call(getWardById, action.payload);
        yield put(fetchWardByDistrictIdSuccess(response.data));
    } catch (error) {
        yield put(fetchWardByDistrictIdFailure(error));
    }
}
function* wardSaga() {
    yield takeLatest(FETCH_WARD, fetchWardSaga);
    yield takeLatest(ADD_WARD, addWardSaga);
    yield takeLatest(UPDATE_WARD, updateWardSaga);
    yield takeLatest(DELETE_WARD, deleteWardSaga);
    yield takeLatest(FETCH_WARD_BY_DISTRICTID, fetchWardByDistrictIdSaga);
}

export default wardSaga;
