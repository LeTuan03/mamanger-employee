import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const TrainingManager = EgretLoadable({
    loader: () => import("./AddressManager"),
});
const ViewComponent = withTranslation()(TrainingManager);
const ManagerAddress = [
    {
        path: ConstantList.ROOT_PATH + "list/address",
        exact: true,
        component: ViewComponent,
    },
];

export default ManagerAddress;
