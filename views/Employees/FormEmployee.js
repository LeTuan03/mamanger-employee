import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, makeStyles } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import Tabs from "@material-ui/core/Tabs";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import MaterialTable from "material-table";
import Tab from "@material-ui/core/Tab";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
// -----
import {
    addEmployee,
    updateEmployee,
} from "app/redux/actions/EmployeesActions";
import {
    CertificateTab,
    EmployeeTab,
} from "../Component/Employees/EmployeeComponent";

const useStyles = makeStyles((theme) => ({
    formFooter: {
        width: "97%",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 10,
        marginBottom: 10,
    },
    certificatetable: {
        "& > div": {
            "& > div.MuiToolbar-gutters": {
                display: "none",
            },
        },
    },
    paper: {
        position: "absolute",
        backgroundColor: theme.palette.background.paper,
        top: `45%`,
        left: `50%`,
        width: "65%",
        transform: `translate(-50%, -50%)`,
        borderRadius: "3px",
        border: "none",
        outline: "none",
        overflow: "hidden",
    },
    root: {
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cerTab: {
        "& > div": {
            paddingBottom: 0,
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function FormEmployee({
    value,
    setValue,
    employee,
    setEmployee,
    handleClose,
    empCertificate,
    handleChangeTab,
    setEmpCertificate,
}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [editCer, setEditCer] = useState(false);

    const handleSubmitEmp = (event) => {
        event.preventDefault();
        if (employee?.id) {
            dispatch(updateEmployee(employee.id, employee));
        } else {
            dispatch(addEmployee(employee));
        }
        handleClose();
    };

    const handleAddCer = () => {
        setEmployee((pre) => ({
            ...pre,
            certificates: [...employee.certificates, empCertificate],
        }));
    };

    const handleEditCer = () => {
        const newData = employee.certificates.map((item) => {
            return item.code === empCertificate.code ? empCertificate : item;
        });
        setEmployee((pre) => ({
            ...pre,
            certificates: newData,
        }));
    };

    const handleDeleteCer = (data) => {
        const newData = employee.certificates.filter(
            (item) => item.code !== data.code
        );
        setEmployee({ ...employee, certificates: newData });
    };

    return (
        <div className={classes.paper}>
            <ValidatorForm onSubmit={handleSubmitEmp}>
                <div
                    align="center"
                    style={{
                        padding: 7,
                        fontSize: 23,
                        color: "#fff",
                        background: "#358600",
                        textTransform: "capitalize",
                    }}
                >
                    {employee.id ? "Chỉnh sửa nhân viên" : "Thêm mới nhân viên"}
                </div>
                <AppBar position="static" className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChangeTab}
                        aria-label="simple tabs example"
                    >
                        <Tab label={"Thông tin nhân viên"} {...a11yProps(0)} />
                        <Tab
                            label={
                                empCertificate.id
                                    ? "Chỉnh sửa chứng chỉ"
                                    : "Chứng chỉ nhân viên"
                            }
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </AppBar>
                {/* tab employee */}
                <TabPanel value={value} index={0}>
                    <EmployeeTab
                        employee={employee}
                        setEmployee={setEmployee}
                    />
                </TabPanel>
                {/* tab certificate */}
                <TabPanel value={value} index={1} className={classes.cerTab}>
                    <CertificateTab
                        editCer={editCer}
                        setEditCer={setEditCer}
                        empCertificate={empCertificate}
                        setEmpCertificate={setEmpCertificate}
                        handleEditCer={handleEditCer}
                        handleAddCer={handleAddCer}
                    />
                    {/* table certificate of employee */}

                    <div className={classes.certificatetable}>
                        <MaterialTable
                            columns={[
                                {
                                    title: "Hành động",
                                    render: (rowData) => (
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    minWidth: "unset",
                                                }}
                                                onClick={() => {
                                                    setValue(1);
                                                    setEmpCertificate(rowData);
                                                    setEditCer(true);
                                                }}
                                            >
                                                <CreateIcon color="primary" />
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    handleDeleteCer(rowData);
                                                }}
                                                style={{
                                                    minWidth: "unset",
                                                }}
                                            >
                                                <DeleteIcon
                                                    style={{
                                                        color: "#ba000d",
                                                    }}
                                                />
                                            </Button>
                                        </div>
                                    ),
                                    align: "center",
                                },
                                {
                                    title: "Mã chứng chỉ",
                                    field: "code",
                                },
                                {
                                    title: "Tên chứng chỉ",
                                    field: "name",
                                },
                                {
                                    title: "Ngày có hiệu lực",
                                    field: "effectiveDate",
                                },
                                {
                                    title: "Ngày hết hiệu lực",
                                    field: "expirationDate",
                                },
                            ]}
                            data={employee.certificates}
                            localization={{
                                body: {
                                    emptyDataSourceMessage:
                                        "Không có dữ liệu để hiển thị",
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
                                sorting: false,
                                rowStyle: (rowData, index) => ({
                                    backgroundColor:
                                        index % 2 === 0 ? "#fffff" : "#f2f2f2",
                                }),
                                maxBodyHeight: 200,
                                overflowY:
                                    employee.certificates.length > 3
                                        ? true
                                        : "hidden",
                            }}
                        />
                    </div>
                </TabPanel>
                {/* action */}
                <div className={classes.formFooter}>
                    <Button
                        style={{
                            marginRight: 10,
                            fontWeight: "bold",
                            minWidth: 100,
                        }}
                        onClick={handleClose}
                        color="secondary"
                        variant="contained"
                    >
                        Hủy
                    </Button>
                    <Button
                        style={{ minWidth: 100, fontWeight: "bold" }}
                        disabled={false}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        {employee.id ? "Lưu" : "Thêm"}
                    </Button>
                </div>
            </ValidatorForm>
        </div>
    );
}
export default FormEmployee;
