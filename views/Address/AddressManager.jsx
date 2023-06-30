import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Grid from "@material-ui/core/Grid";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumb } from "egret";
import { useDispatch } from "react-redux";
import { fetchProvinces } from "app/redux/actions/ProvincesActions";
import { fetchDistrict } from "app/redux/actions/DistrictsActions";
import { fetchWard } from "app/redux/actions/WardsActions";
import Provinces from "./Provinces";
import Districts from "./Districts";
import Wards from "./Wards";

export default function AddressManager({ t }) {
    const dispatch = useDispatch();

    useEffect(() => {
        [fetchProvinces, fetchDistrict, fetchWard].forEach((actionCreator) =>
            dispatch(actionCreator())
        );
    }, []);

    return (
        <div className="m-sm-30">
            <Helmet>
                <title>
                    {"Fashion Store"} | {t("web_site")}
                </title>
            </Helmet>
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: "Quản lí",
                            path: "/list/address",
                        },
                        { name: "Quản lí địa chỉ" },
                    ]}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Provinces />
                </Grid>
                <Grid item xs={4}>
                    <Districts />
                </Grid>
                <Grid item xs={4}>
                    <Wards />
                </Grid>
            </Grid>
            <ToastContainer />
        </div>
    );
}
