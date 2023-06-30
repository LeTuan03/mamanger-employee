import React, { useState } from "react";
import { Button, FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    SelectValidator,
    TextValidator,
    ValidatorForm,
} from "react-material-ui-form-validator";
import MenuItem from "@material-ui/core/MenuItem";

import { connect, useDispatch } from "react-redux";
import {
    addDistrict,
    updateDistrict,
} from "app/redux/actions/DistrictsActions";
import { mapStateToProps } from "../Employees/Employees";
import AddressTable from "../Component/Address/AddressComponent";

function Districts({ provinces, districts }) {
    const emtyDistrict = {
        code: "",
        name: "",
        area: "",
        provinceDto: {
            id: "",
        },
    };
    const [district, setDistrict] = useState(emtyDistrict);
    const [openDistrict, setOpenDistrict] = useState(false);
    const dispatch = useDispatch();

    const handleDistrictChange = (event) => {
        const { name, value } = event.target;
        //nếu name === 'id' trong form thì set provinceDto: { id: value }
        if (name === "idProvince") {
            setDistrict((state) => ({ ...state, provinceDto: { id: value } }));
        } else {
            setDistrict((state) => ({ ...state, [name]: value }));
        }
    };

    const hadleSubmitDistrict = async (event) => {
        event.preventDefault();
        district.id
            ? dispatch(updateDistrict(district.id, district))
            : dispatch(addDistrict(district));
        setOpenDistrict(false);
    };

    const handleOpen = () => {
        setOpenDistrict(true);
        setDistrict(emtyDistrict);
    };

    const handleSetDataEdit = (data) => {
        setOpenDistrict(true);
        setDistrict((pre) => ({
            ...pre,
            code: data.code,
            name: data.name,
            id: data.id,
            area: data.area,
            provinceDto: {
                id: "",
            },
        }));
    };
    return (
        <>
            <Dialog
                open={openDistrict}
                onClose={() => setOpenDistrict(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {district.id ? "Sửa thông tin Huyện" : "Thêm Huyện"}
                </DialogTitle>
                <ValidatorForm
                    onSubmit={hadleSubmitDistrict}
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
                                    label="Chọn Tỉnh *"
                                    name="idProvince"
                                    value={district.provinceDto.id}
                                    style={{ width: "100%" }}
                                    onChange={handleDistrictChange}
                                    validators={["required"]}
                                    errorMessages={["Vui lòng chọn Tỉnh"]}
                                    placeholder="Chọn Tỉnh"
                                >
                                    {provinces &&
                                        provinces.map((item, index) => (
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
                                label="Mã Huyện *"
                                name="code"
                                value={district.code}
                                style={{ width: "100%" }}
                                onChange={handleDistrictChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập mã Huyện"]}
                                placeholder="Nhập mã Huyện"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Tên Huyện *"
                                name="name"
                                value={district.name}
                                style={{ width: "100%" }}
                                onChange={handleDistrictChange}
                                validators={["required"]}
                                errorMessages={["Vui lòng nhập tên Huyện"]}
                                placeholder="Nhập tên Huyện"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                label="Diện tích *"
                                name="area"
                                value={district.area}
                                style={{ width: "100%" }}
                                onChange={handleDistrictChange}
                                validators={["required", "isNumber"]}
                                errorMessages={[
                                    "Vui lòng nhập diện tích",
                                    "Vui lòng nhập số",
                                ]}
                                placeholder="Nhập diện tích Huyện"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DialogActions>
                                <Button
                                    onClick={() => setOpenDistrict(false)}
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                    color={"secondary"}
                                    variant="contained"
                                >
                                    Hủy
                                </Button>
                                <Button
                                    style={{
                                        fontWeight: "bold",
                                        minWidth: 100,
                                    }}
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                >
                                    {district.id ? "Lưu" : "Thêm"}
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Dialog>
            {/* table district */}
            <AddressTable
                type="district"
                handleOpen={handleOpen}
                data={districts}
                handleSetDataEdit={handleSetDataEdit}
            />
        </>
    );
}
export default connect(mapStateToProps)(Districts);
