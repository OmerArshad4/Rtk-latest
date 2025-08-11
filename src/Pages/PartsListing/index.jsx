import React, { useState } from "react";
import { FiEye, FiEdit } from "react-icons/fi";
import DataTable from "../../Shared/DataTable";
 
import { useNavigate } from "react-router-dom";
 
const PartsListing = ( {TableHeadingsList , tableDataList}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10); // default
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const navigate = useNavigate();
  const handleCustomerDetail = () => {
    navigate("/admin/customerDetail");
  };
 
  const handleChangeRowsPerPage = (newPerPage, page) => {
    setRowsPerPage(newPerPage);
    setCurrentPage(page);
 
    // If you're using API:
    // fetchPartsData({ perPage: newPerPage, page: page });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
 
    // If you're using API:
    // fetchPartsData({ perPage: rowsPerPage, page: page });
  };
 
  return (
  
  <div className="w-full">
    <DataTable
      pagination={true}
      totalRows={totalRows}
      allData={tableDataList}
      expandableRows={false}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      selectableRows={false}
      tableHeadings={TableHeadingsList}
      
    />
    </div>
 
  );
};
 
export default PartsListing;
 
 