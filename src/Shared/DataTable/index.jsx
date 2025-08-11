import React, { memo } from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = (props) => {
  const {
    allData,
    totalRows,
    onChangePage,
    onRowClicked,
    tableHeadings,
    expandableRows,
    selectableRows,
    ExpandedComponent,
    clearSelectedRows,
    pagination = false,
    onChangeRowsPerPage,
    selectableRowDisabled,
    handleSelectedRowsChange,
  } = props;
  const data = allData;
  const columns = tableHeadings;

  const customStyles = {
    header: {
      style: {
        fontSize: "14px",
      },
    },
    headCells: {
      style: {
        fontFamily: "DM Sans, sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        color: "#020817",
        lineHeight: "14px",
      },
    },
    rows: {
      style: {
        padding: "10px 0px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        color: "#020817",
        lineHeight: "16px",
      },
    },
    tableWrapper: {
      style: {
        width: "100%",
        overflow: "visible",
      },
    },
  };

  return (
    <div className="">
      <DataTable
        striped
        sortable
        responsive
        data={data}
        theme={"light"}
        paginationServer
        highlightOnHover
        columns={columns}
        pagination={pagination}
        customStyles={customStyles}
        onRowClicked={onRowClicked}
        onChangePage={onChangePage}
        paginationTotalRows={totalRows}
        selectableRows={selectableRows}
        expandableRows={expandableRows}
        // clearSelectedRows={clearSelectedRows}
        onChangeRowsPerPage={onChangeRowsPerPage}
        expandableRowsComponent={ExpandedComponent}
        selectableRowDisabled={selectableRowDisabled}
        onSelectedRowsChange={handleSelectedRowsChange}
        paginationRowsPerPageOptions={[2, 20, 30, 50, 75, 100]}
      />
    </div>

  );
};

export default memo(DataTableComponent);
