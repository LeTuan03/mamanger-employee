import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import ProvinceReducer from "./ProvincesReducer";
import DistrictReducer from "./DistrictsReducer";
import WardReducer from "./WardReducers";

const RootReducer = combineReducers({
    employees: EmployeesReducer,
    provinces: ProvinceReducer,
    districts: DistrictReducer,
    wards: WardReducer,
});

export default RootReducer;
