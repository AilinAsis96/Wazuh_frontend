// @ts-nocheck
import { React, useState, useEffect } from "react";
import { Pagination, Spinner } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const API = process.env.REACT_APP_API;

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [state, setStateTask] = useState(false);
  
  const columns = [
    { dataField: "id", text: "Id", sort: true, filter: textFilter() },
    { dataField: "title", text: "Title", sort: true, filter: textFilter() },
    { dataField: "completed", text: "Completed", filter: textFilter() },
    { dataField: "user_id", text: "User", filter: textFilter() },
  ];
  
  const getUserById = async (id) => {
    const res = await fetch(`${API}/api/users/${id}`);
    const data = await res.json();
    return data;
  };
  
  const getTasks = async () => {
    const res = await fetch(`${API}/api/tasks/`);
    const data = await res.json();

    data.map((compl) => {
      if (compl.completed === false) {
        compl.completed = "No";
      } else {
        compl.completed = "Yes";
      }
    });
    data.map((user) => {
      getUserById(user.user_id).then((response) => {
        user.user_id = response.name});
       
    });
    setTasks(data);
  };

  useEffect(() => {
     getTasks();
  }, []);



  const { SearchBar } = Search;

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <ToolkitProvider keyField="id" data={tasks} columns={columns} search>
      {(props) => (
          <div>
          <SearchBar {...props.searchProps} />
          <hr />
          <BootstrapTable
            bootstrap4
            search
            hover
            printable
            keyField="id"
            columns={columns}
            data={tasks}
            pagination={pagination}
            filter={filterFactory()}
            filterPosition="top"
            {...props.baseProps}
          />
        </div>
      )}
    </ToolkitProvider>
  );
}