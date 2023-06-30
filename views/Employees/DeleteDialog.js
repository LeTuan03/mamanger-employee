import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
    deleteEmployee,
    updateEmployee,
} from "app/redux/actions/EmployeesActions";
import { deleteProvince } from "app/redux/actions/ProvincesActions";
import { deleteDistrict } from "app/redux/actions/DistrictsActions";
import { deleteWard } from "app/redux/actions/WardsActions";

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} style={{ width: "500px" }} />
        </Draggable>
    );
}

export default function DraggableDialog({ data, type }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const deleteAction = () => {
        if (type === "update") {
            dispatch(updateEmployee(data.id, data));
        } else if (type === "province") {
            dispatch(deleteProvince(data.id));
        } else if (type === "district") {
            dispatch(deleteDistrict(data.id));
        } else if (type === "ward") {
            dispatch(deleteWard(data.id));
        } else {
            dispatch(deleteEmployee(data.id));
        }
        setOpen(false);
    };

    return (
        <>
            <Tooltip title="Xóa">
                <Button
                    onClick={() => setOpen(true)}
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
            </Tooltip>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Bạn có muốn xóa {data.name} ?
                </DialogTitle>
                <DialogContent>
                    Bạn có chắc chắn muốn xóa vĩnh viễn {data.name} khỏi hệ
                    thống?
                </DialogContent>
                <DialogActions style={{ margin: 7 }}>
                    <Button
                        onClick={() => setOpen(false)}
                        style={{
                            fontWeight: "bold",
                            minWidth: 100,
                            marginRight: 10,
                        }}
                        color={"secondary"}
                        variant="contained"
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={deleteAction}
                        color="primary"
                        style={{
                            fontWeight: "bold",
                            minWidth: 100,
                        }}
                        variant="contained"
                    >
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
