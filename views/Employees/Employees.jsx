import React, { useState, useEffect } from "react";
import { Modal, makeStyles } from "@material-ui/core";
import FormEmployee from "./FormEmployee";
import { connect, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "egret";
import moment from "moment";
// -----
import { fetchEmployees } from "app/redux/actions/EmployeesActions";
import TableEmployee from "../Component/Employees/EmployeeComponent";
const useStyles = makeStyles({
    tableEmp: {
        "&::-webkit-scrollbar": {
            width: "0px",
        },
        marginTop: 10,
    },
});
function Employees({ t, employees }) {
    const emtyEmployee = {
        name: "",
        email: "",
        phone: "",
        code: "",
        age: "",
        provinceId: "",
        districtId: "",
        wardsId: "",
        certificates: [],
    };
    const emtyCertificate = {
        createDate: null,
        createdBy: null,
        modifyDate: null,
        modifiedBy: null,
        provinceId: "",
        code: "",
        name: "",
        effectiveDate: moment(new Date()).format("YYYY-MM-DD"),
        expirationDate: moment(new Date()).format("YYYY-MM-DD"),
    };

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [empCertificate, setEmpCertificate] = useState(emtyCertificate);
    const [employee, setEmployee] = useState(emtyEmployee);

    const dispatch = useDispatch();

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const reset = () => {
        setEmployee(emtyEmployee);
        setEmpCertificate(emtyCertificate);
        setValue(0);
    };
    const handleClose = () => {
        setOpen(false);
        reset();
    };
    const handleOpenForm = () => {
        setOpen(true);
        reset();
    };
    const handleEditClick = (emp) => {
        setOpen(true);
        setEmployee((pre) => ({ ...pre, ...emp }));
    };
    return (
        <div className="m-sm-30">
            <Helmet>
                <title>
                    {"Fashion Store"} | {t("web_site")}
                </title>
            </Helmet>
            <div>
                <Breadcrumb
                    routeSegments={[
                        {
                            name: "Quản lí",
                            path: "/list/addresst",
                        },
                        { name: "Quản Lý nhân viên" },
                    ]}
                />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {employee && (
                    <FormEmployee
                        value={value}
                        setValue={setValue}
                        employee={employee}
                        setEmployee={setEmployee}
                        handleClose={handleClose}
                        empCertificate={empCertificate}
                        handleChangeTab={handleChangeTab}
                        setEmpCertificate={setEmpCertificate}
                    />
                )}
            </Modal>

            {/* all employee render table  */}

            <div className={classes.tableEmp}>
                {employees && (
                    <TableEmployee
                        employees={employees}
                        handleOpenForm={handleOpenForm}
                        handleEditClick={handleEditClick}
                    />
                )}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => ({
    employees: state.employees.employees,
    provinces: state.provinces.provinces,
    districts: state.districts.districts,
    wards: state.wards.wards,
});

export default connect(mapStateToProps)(Employees);
