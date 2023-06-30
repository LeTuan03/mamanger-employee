import { all } from "redux-saga/effects";
import employeesSaga from "./EmployeesSagas";
import provinceSaga from "./ProvincesSagas";
import districtSaga from "./DistrictsSagas";
import wardSaga from "./WardsSagas";

export default function* rootSagas() {
    yield all([employeesSaga(), provinceSaga(), districtSaga(), wardSaga()]);
}
