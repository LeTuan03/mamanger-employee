import React from "react";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import DraggableDialog from "app/views/Employees/DeleteDialog";

export default function AddressTable({
    data,
    type,
    handleOpen,
    handleSetDataEdit,
}) {
    const title =
        type === "province" ? "Tỉnh" : type === "district" ? "Huyện" : "Xã";
    return (
        <MaterialTable
            title={
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                    style={{
                        minWidth: 150,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    Thêm mới {title}
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
                            }}
                        >
                            <Button
                                style={{
                                    minWidth: "unset",
                                }}
                                onClick={() => handleSetDataEdit(rowData)}
                            >
                                <CreateIcon color="primary" />
                            </Button>

                            <DraggableDialog data={rowData} type={type} />
                        </div>
                    ),
                    align: "center",
                },
                {
                    title: "Mã code",
                    field: "code",
                    align: "center",
                },
                { title: "Tên " + title, field: "name", align: "center" },
            ]}
            data={data}
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
                pageSize: 10,
                sorting: false,
                rowStyle: (rowData, index) => ({
                    backgroundColor: index % 2 === 0 ? "#fffff" : "#f2f2f2",
                }),
                searchFieldStyle: { width: 150 },
                maxBodyHeight: 450,
                overflowY: "hidden",
            }}
        />
    );
}
