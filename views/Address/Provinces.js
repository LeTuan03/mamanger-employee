import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect, useDispatch } from "react-redux";

import {
    addProvince,
    updateProvince,
} from "app/redux/actions/ProvincesActions";
import AddressTable from "../Component/Address/AddressComponent";
import { mapStateToProps } from "../Employees/Employees";
import { Button } from "@material-ui/core";

function Provinces({ provinces }) {
    const emtyProvince = {
        code: "",
        name: "",
        area: "",
    };

    const [province, setProvince] = useState(emtyProvince);
    const [openProvince, setOpenProvince] = useState(false);

    const dispatch = useDispatch();

    const handleProvinceChange = (event) => {
        const { name, value } = event.target;
        setProvince((state) => ({ ...state, [name]: value }));
    };

    const hadleSubmitProvince = (event) => {
        event.preventDefault();
        if (province.id) {
            dispatch(updateProvince(province.id, province));
        } else {
            dispatch(addProvince(province));
        }
        setOpenProvince(false);
    };
    const handleOpen = () => {
        setOpenProvince(true);
        setProvince(emtyProvince);
    };
    const handleSetDataEdit = (data) => {
        setOpenProvince(true);
        setProvince(data);
    };
    return (
        <>
            <Dialog
                open={openProvince}
                onClose={() => setOpenProvince(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {province.id ? "Sửa thông tin Tỉnh" : "Thêm Tỉnh"}
                </DialogTitle>
                <ValidatorForm
                    onSubmit={hadleSubmitProvince}
                    style={{
                        overflow: "hidden",
                        maxWidth: 450,
                        minWidth: 400,
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        style={{
                            overflow: "hidden",
                            padding: "0px 20px 8px",
                        }}
                    >
                        <Grid item xs={12}>
                            <TextValidator
                                label="Mã Tỉnh *"
                                id="province"
                                name="code"
                                value={province.code}
                                style={{ width: "100%" }}
                                onChange={handleProvinceChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập mã Tỉnh"]}
                                placeholder="Nhập mã Tỉnh"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Tên Tỉnh *"
                                id="province"
                                name="name"
                                value={province.name}
                                style={{ width: "100%" }}
                                onChange={handleProvinceChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập tên Tỉnh"]}
                                placeholder="Nhập tên Tỉnh"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Diện tích *"
                                id="province"
                                name="area"
                                value={province.area}
                                style={{ width: "100%" }}
                                onChange={handleProvinceChange}
                                validators={["required", "isNumber"]}
                                errorMessages={[
                                    "Vui lòng nhập diện tích",
                                    "Vui lòng nhập số",
                                ]}
                                placeholder="Nhập diện tích Tỉnh"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DialogActions
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button
                                    onClick={() => setOpenProvince(false)}
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                    color="secondary"
                                    variant="contained"
                                >
                                    Hủy
                                </Button>
                                <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                >
                                    {province.id ? "Lưu" : "Thêm"}
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Dialog>
            <AddressTable
                type="province"
                handleOpen={handleOpen}
                data={provinces}
                handleSetDataEdit={handleSetDataEdit}
            />
        </>
    );
}
export default connect(mapStateToProps)(Provinces);
