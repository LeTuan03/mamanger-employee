// DistrictSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    addDistricts,
    deleteDistricts,
    editDistricts,
    getDistricts,
    getDistrictsById,
} from "../api/employeesApi";
import {
    ADD_DISTRICT,
    DELETE_DISTRICT,
    FETCH_DISTRICT,
    FETCH_DISTRICT_BY_PROVINCE_ID,
    UPDATE_DISTRICT,
    addDistrictFailure,
    addDistrictSuccess,
    deleteDistrictFailure,
    deleteDistrictSuccess,
    fetchDistrictByProvinceIdFailure,
    fetchDistrictByProvinceIdSuccess,
    fetchDistrictFailure,
    fetchDistrictSuccess,
    updateDistrictFailure,
    updateDistrictSuccess,
} from "../actions/DistrictsActions";

function* fetchDistrictSaga() {
    const response = yield call(getDistricts);
    if (response.code === 200) {
        yield put(fetchDistrictSuccess(response.data));
    } else {
        yield put(fetchDistrictFailure(response.message));
    }
}

function* addDistrictSaga(action) {
    const response = yield call(addDistricts, action.payload);
    if (response.code === 200 || response.status === 200) {
        yield put(addDistrictSuccess(response.data));
        toast.success(response.message, { autoClose: 1000 });
    } else {
        yield put(addDistrictFailure(response.message));
        toast.error(response.message, { autoClose: 1000 });
    }
}

function* updateDistrictSaga(action) {
    try {
        const response = yield call(
            editDistricts,
            action.payload.id,
            action.payload.district
        );

        yield put(updateDistrictSuccess(response.data));
        toast.success(response.data.message, { autoClose: 1000 });
    } catch (error) {
        yield put(updateDistrictFailure(error));
        toast.error(error, { autoClose: 1000 });
    }
}

function* deleteDistrictSaga(action) {
    try {
        const response = yield call(deleteDistricts, action.payload);
        yield put(deleteDistrictSuccess(action.payload));
        toast.success(response.message, { autoClose: 1000 });
    } catch (error) {
        yield put(deleteDistrictFailure(error));
        toast.error(error, { autoClose: 1000 });
    }
}
function* fetchDistrictByProvinceIdSaga(action) {
    try {
        const response = yield call(getDistrictsById, action.payload);
        yield put(fetchDistrictByProvinceIdSuccess(response.data));
    } catch (error) {
        yield put(fetchDistrictByProvinceIdFailure(error));
    }
}
function* districtSaga() {
    yield takeLatest(FETCH_DISTRICT, fetchDistrictSaga);
    yield takeLatest(ADD_DISTRICT, addDistrictSaga);
    yield takeLatest(UPDATE_DISTRICT, updateDistrictSaga);
    yield takeLatest(DELETE_DISTRICT, deleteDistrictSaga);
    yield takeLatest(
        FETCH_DISTRICT_BY_PROVINCE_ID,
        fetchDistrictByProvinceIdSaga
    );
}

export default districtSaga;
