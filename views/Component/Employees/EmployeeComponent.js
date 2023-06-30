import React, { useEffect } from "react";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import MaterialTable from "material-table";
import { Button, Grid, makeStyles } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DraggableDialog from "app/views/Employees/DeleteDialog";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import {
    SelectValidator,
    TextValidator,
} from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
///---
import { fetchProvinces } from "app/redux/actions/ProvincesActions";
import { fetchDistrictByProvinceId } from "app/redux/actions/DistrictsActions";
import { fetchWardByDistrictId } from "app/redux/actions/WardsActions";

const useStyles = makeStyles({
    formFooterCer: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 5,
        marginTop: 10,
        "& button": {
            fontWeight: "bold",
        },
    },
});

export function EmployeeTab({ employee, setEmployee }) {
    const dispatch = useDispatch();
    const provinces = useSelector((state) => state.provinces.provinces);
    const districts = useSelector((state) => state.districts.districts);
    const wards = useSelector((state) => state.wards.wards);

    useEffect(() => {
        fetchAddressAsync();
        dispatch(fetchProvinces());
    }, [employee.provinceId, employee.districtId]);

    const fetchAddressAsync = async () => {
        if (employee.provinceId) {
            dispatch(fetchDistrictByProvinceId(employee.provinceId));
            if (employee.districtId) {
                dispatch(fetchWardByDistrictId(employee.districtId));
            }
        }
    };

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setEmployee({ ...employee, [name]: value });
        if (name === "provinceId") {
            setEmployee((pre) => ({
                ...pre,
                districtId: "",
                wardsId: "",
            }));
        }
        if (name === "districtId") {
            setEmployee((pre) => ({
                ...pre,
                wardsId: "",
            }));
        }
    };

    return (
        <Grid container spacing={5}>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <TextValidator
                    label="Mã nhân viên *"
                    style={{ width: "100%" }}
                    name="code"
                    value={employee.code}
                    onChange={handleInputChange}
                    validators={["required", "matchRegexp:^\\d{6,10}$"]}
                    errorMessages={[
                        "Vui lòng nhập mã nhân viên",
                        "Mã nhân viên phải ít 6 chữ số và nhỏ hơn 10 chữ số",
                    ]}
                    placeholder="Nhập mã nhân viên"
                />
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <TextValidator
                    style={{ width: "100%" }}
                    label="Tên nhân viên *"
                    name="name"
                    value={employee.name}
                    onChange={handleInputChange}
                    validators={["required"]}
                    errorMessages={["Vui lòng nhập tên"]}
                    placeholder="Nhập tên"
                />
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <TextValidator
                    style={{ width: "100%" }}
                    label="Email *"
                    name="email"
                    value={employee.email}
                    onChange={handleInputChange}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                        "Vui lòng nhập Email",
                        "Yêu cầu nhập đúng Email",
                    ]}
                    placeholder="Nhập Email"
                />
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <TextValidator
                    style={{ width: "100%" }}
                    label="Tuổi nhân viên *"
                    name="age"
                    value={employee.age}
                    onChange={handleInputChange}
                    validators={[
                        "required",
                        "isNumber",
                        "matchRegexp:^([0-9]{1}[0-9]{1})?$",
                    ]}
                    errorMessages={[
                        "Vui lòng nhập tuổi",
                        "Yêu cầu nhập tuổi",
                        "Số tuổi không hợp lệ !!!",
                    ]}
                    placeholder="Nhập tuổi"
                />
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <TextValidator
                    label="Số điện thoại *"
                    style={{ width: "100%" }}
                    name="phone"
                    value={employee.phone}
                    onChange={handleInputChange}
                    validators={["required"]}
                    errorMessages={["Vui lòng nhập số điện thoại"]}
                    placeholder="Nhập số điện thoại"
                />
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <FormControl style={{ width: "100%" }}>
                    <SelectValidator
                        style={{ width: "100%" }}
                        label="Tỉnh / Thành Phố  *"
                        value={employee.provinceId}
                        name="provinceId"
                        onChange={handleInputChange}
                        validators={["required"]}
                        errorMessages={["Vui lòng chọn Tỉnh / Thành phố !!!"]}
                    >
                        {provinces &&
                            provinces.map((pro) => {
                                return (
                                    <MenuItem key={pro.code} value={pro.id}>
                                        {pro.name}
                                    </MenuItem>
                                );
                            })}
                    </SelectValidator>
                </FormControl>
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <FormControl style={{ width: "100%" }}>
                    <SelectValidator
                        style={{ width: "100%" }}
                        label="Quận / Huyện  *"
                        value={employee.districtId}
                        name="districtId"
                        onChange={handleInputChange}
                        validators={["required"]}
                        errorMessages={["Vui lòng chọn Quận / Huyện !!!"]}
                    >
                        {districts ? (
                            districts.map((pro) => {
                                return (
                                    <MenuItem key={pro.code} value={pro.id}>
                                        {pro.name}
                                    </MenuItem>
                                );
                            })
                        ) : (
                            <MenuItem>Chọn Quận / Huyện</MenuItem>
                        )}
                    </SelectValidator>
                </FormControl>
            </Grid>
            <Grid item sm={6} style={{ padding: "10px 20px" }}>
                <FormControl style={{ width: "100%" }}>
                    <SelectValidator
                        style={{ width: "100%" }}
                        label="Xã / Phường *"
                        value={employee.wardsId}
                        name="wardsId"
                        onChange={handleInputChange}
                        validators={["required"]}
                        errorMessages={["Vui lòng chọn Xã / Phường !!!"]}
                    >
                        {wards ? (
                            wards.map((pro) => {
                                return (
                                    <MenuItem key={pro.code} value={pro.id}>
                                        {pro.name}
                                    </MenuItem>
                                );
                            })
                        ) : (
                            <MenuItem>Chọn Xã / Phường</MenuItem>
                        )}
                    </SelectValidator>
                </FormControl>
            </Grid>
        </Grid>
    );
}
export function CertificateTab({
    empCertificate,
    setEmpCertificate,
    editCer,
    setEditCer,
    handleAddCer,
    handleEditCer,
}) {
    const classes = useStyles();
    const provinces = useSelector((state) => state.provinces.provinces);
    const handleInputCeritificateChange = (event, property) => {
        if (event.target) {
            const { value, name } = event.target;
            setEmpCertificate({ ...empCertificate, [name]: value });
        } else {
            setEmpCertificate({
                ...empCertificate,
                [property]: moment(event).format("YYYY-MM-DD"),
            });
        }
    };
    return (
        <Grid container spacing={5} style={{ marginBottom: 30 }}>
            <Grid item sm={4} style={{ padding: "10px 20px" }}>
                <TextValidator
                    label="Tên chứng chỉ *"
                    style={{ width: "100%" }}
                    name="name"
                    value={empCertificate.name}
                    onChange={(event) =>
                        handleInputCeritificateChange(event, "name")
                    }
                    placeholder="Nhập mã tên chứng chỉ"
                />
            </Grid>
            <Grid item sm={4} style={{ padding: "10px 20px" }}>
                <TextValidator
                    label="Mã chứng chỉ*"
                    style={{ width: "100%" }}
                    name="code"
                    value={empCertificate.code}
                    onChange={(event) =>
                        handleInputCeritificateChange(event, "code")
                    }
                    placeholder="Nhập mã chứng chỉ"
                />
            </Grid>
            <Grid item sm={4} style={{ padding: "10px 20px" }}>
                <FormControl style={{ width: "100%" }}>
                    <SelectValidator
                        style={{ width: "100%" }}
                        label="Tỉnh / Thành Phố  *"
                        value={empCertificate.provinceId}
                        name="provinceId"
                        onChange={(event) =>
                            handleInputCeritificateChange(event, "provinceId")
                        }
                    >
                        {provinces &&
                            provinces.map((pro) => {
                                return (
                                    <MenuItem key={pro.code} value={pro.id}>
                                        {pro.name}
                                    </MenuItem>
                                );
                            })}
                    </SelectValidator>
                </FormControl>
            </Grid>
            <Grid item xs={editCer ? 4 : 5} style={{ padding: "10px 20px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{ width: "100%" }}
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        label="Ngày có hiệu lực"
                        name="effectiveDate"
                        value={empCertificate.effectiveDate}
                        onChange={(date) =>
                            handleInputCeritificateChange(date, "effectiveDate")
                        }
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={editCer ? 4 : 5} style={{ padding: "10px 20px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{ width: "100%" }}
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        label="Ngày hết hiệu lực"
                        value={empCertificate.expirationDate}
                        onChange={(date) =>
                            handleInputCeritificateChange(
                                date,
                                "expirationDate"
                            )
                        }
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={editCer ? 4 : 2} style={{ padding: "10px 20px" }}>
                <div className={classes.formFooterCer}>
                    {/* button cancel */}
                    {editCer && (
                        <Button
                            style={{ width: "50%" }}
                            color="secondary"
                            variant="contained"
                            onClick={() => {
                                setEditCer(false);
                                setEmpCertificate({
                                    provinceId: "",
                                    code: "",
                                    name: "",
                                    effectiveDate: new Date()
                                        .toISOString()
                                        .split("T")[0],
                                    expirationDate: new Date()
                                        .toISOString()
                                        .split("T")[0],
                                });
                            }}
                        >
                            Hủy
                        </Button>
                    )}
                    {/* button edit or add certificate */}
                    <Button
                        style={{ width: editCer ? "50%" : 120 }}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            if (editCer) {
                                handleEditCer();
                            } else {
                                handleAddCer();
                            }

                            setEditCer(false);
                            setEmpCertificate({
                                provinceId: "",
                                code: "",
                                name: "",
                                effectiveDate: new Date()
                                    .toISOString()
                                    .split("T")[0],
                                expirationDate: new Date()
                                    .toISOString()
                                    .split("T")[0],
                            });
                        }}
                    >
                       Lưu
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default function TableEmployee({
    employees,
    handleOpenForm,
    handleEditClick,
}) {
    return (
        <MaterialTable
            title={
                <Button
                    onClick={handleOpenForm}
                    color="primary"
                    variant="contained"
                >
                    Thêm mới
                </Button>
            }
            columns={[
                {
                    title: "Hành động",
                    render: (rowData) => (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingLeft: "20px",
                            }}
                        >
                            <Button
                                style={{
                                    minWidth: "unset",
                                }}
                                onClick={() => handleEditClick(rowData)}
                            >
                                <CreateIcon color="primary" />
                            </Button>

                            <DraggableDialog data={rowData} />
                        </div>
                    ),
                    align: "center",
                },

                {
                    title: "Mã nhân viên",
                    field: "code",
                },
                {
                    title: "Tên nhân viên",
                    field: "name",
                },
                { title: "Email", field: "email" },
                {
                    title: "Số điện thoại",
                    field: "phone",
                },
            ]}
            data={employees}
            localization={{
                body: {
                    emptyDataSourceMessage: "Không có dữ liệu để hiển thị",
                },
                header: {
                    actions: "Hành động",
                },
                pagination: {
                    labelRowsSelect: "bản ghi",
                },
                toolbar: {
                    searchPlaceholder: "Tìm kiếm",
                },
            }}
            options={{
                headerStyle: {
                    color: "#fff",
                    padding: "7px 0",
                    background: "#358600",
                },
                cellStyle: {
                    paddingLeft: 0,
                },
                sorting: false,
                draggable: false,
                pageSize: 10,
                searchFieldStyle: { width: 400 },
                rowStyle: (rowData, index) => ({
                    backgroundColor: index % 2 === 0 ? "#fffff" : "#f2f2f2",
                }),
                maxBodyHeight: 450,
                overflowY: employees.length > 8 ? "scroll" : "hidden",
            }}
        />
    );
}
