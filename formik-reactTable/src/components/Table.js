import React, { useEffect, useState, useMemo } from "react"
import TableContainer from './tableContainer';
import axios from "axios";
import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {SelectColumnFilter} from './filter'
function Table() {
  const [dataEmp, setDataEmp] = useState([])
  useEffect(() => {
      axios
        .get("http://173.249.45.237:8081/hrs/employee")
        .then((res) => {
              // console.log(res.data.list);
          // console.log(res.data.list[1]);
          setDataEmp(res.data.list);
        }) //loggin the error
        .catch((err) => {
          console.log(err);
        })
      console.log(dataEmp)
  }, [])
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header:"Date Of Birth",
        accessor:"dateOfBirth",
        disableSortBy:true,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
    ],
    []
  )
  return (
  <Container style={{marginTop:100,marginLeft:0}}>
    <TableContainer columns={columns} data={dataEmp}/>
  </Container>
  );
}

export default Table;
