import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const TrainingManager = EgretLoadable({
  loader: () => import("./Employees"),
});
const ViewComponent = withTranslation()(TrainingManager);
const ManagerEmployees = [
  {
    path: ConstantList.ROOT_PATH + "list/employees",
    exact: true,
    component: ViewComponent,
  },
];

export default ManagerEmployees;
