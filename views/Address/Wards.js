import React, { useState } from "react";
import { Button, FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { connect, useDispatch } from "react-redux";
import {
    SelectValidator,
    TextValidator,
    ValidatorForm,
} from "react-material-ui-form-validator";

import { addWard, updateWard } from "app/redux/actions/WardsActions";
import { mapStateToProps } from "../Employees/Employees";
import AddressTable from "../Component/Address/AddressComponent";

function Wards({ districts, wards }) {
    const emtyWard = {
        code: "",
        name: "",
        area: "",
        districtDto: {
            id: "",
        },
    };
    const [ward, setWard] = useState(emtyWard);
    const [openWard, setOpenWard] = useState(false);

    const dispatch = useDispatch();

    const handleWardChange = (event) => {
        const { name, value } = event.target;

        //nếu name === 'id' trong form thì set districtDto: { id: value }

        if (name === "idDistrict") {
            setWard((state) => ({ ...state, districtDto: { id: value } }));
        } else {
            setWard((state) => ({ ...state, [name]: value }));
        }
    };

    const hadleSubmitWard = async (event) => {
        event.preventDefault();
        ward.id ? dispatch(updateWard(ward.id, ward)) : dispatch(addWard(ward));
        setOpenWard(false);
    };

    const handleOpen = () => {
        setOpenWard(true);
        setWard(emtyWard);
    };

    const handleSetDataEdit = (data) => {
        setOpenWard(true);
        setWard((pre) => ({
            ...pre,
            code: data.code,
            name: data.name,
            id: data.id,
            area: data.area,
            districtDto: {
                id: "",
            },
        }));
    };
    return (
        <>
            <Dialog
                open={openWard}
                onClose={() => setOpenWard(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {ward.id ? "Sửa thông tin Xã" : "Thêm Xã"}
                </DialogTitle>
                <ValidatorForm
                    onSubmit={hadleSubmitWard}
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
                            <FormControl style={{ width: "100%" }}>
                                <SelectValidator
                                    label="Chọn Huyện *"
                                    name="idDistrict"
                                    value={ward.districtDto.id}
                                    style={{ width: "100%" }}
                                    onChange={handleWardChange}
                                    validators={["required"]}
                                    errorMessages={["Vui lòng chọn mã code"]}
                                    placeholder="Chọn mã Huyện"
                                >
                                    {districts &&
                                        districts.map((item, index) => (
                                            <MenuItem
                                                key={index}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Mã Xã *"
                                name="code"
                                value={ward.code}
                                style={{ width: "100%" }}
                                onChange={handleWardChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập mã code"]}
                                placeholder="Nhập mã Xã"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Tên Xã *"
                                name="name"
                                value={ward.name}
                                style={{ width: "100%" }}
                                onChange={handleWardChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập tên Xã"]}
                                placeholder="Nhập tên Xã"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Diện tích *"
                                name="area"
                                value={ward.area}
                                style={{ width: "100%" }}
                                onChange={handleWardChange}
                                validators={["required", "isNumber"]}
                                errorMessages={[
                                    "Vui lòng nhập diện tích",
                                    "Vui lòng nhập số",
                                ]}
                                placeholder="Nhập diện tích Xã"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DialogActions>
                                <Button
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => setOpenWard(false)}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    {ward.id ? "Lưu" : "Thêm"}
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Dialog>
            {/* table ward */}
            <AddressTable
                type="ward"
                handleOpen={handleOpen}
                data={wards}
                handleSetDataEdit={handleSetDataEdit}
            />
        </>
    );
}
export default connect(mapStateToProps)(Wards);
