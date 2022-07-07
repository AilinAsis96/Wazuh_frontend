// @ts-nocheck
import {React, useState, useEffect} from "react";
import { Pagination } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';

const API = process.env.REACT_APP_API;

export default function Tasks () {
    const [tasks, setTasks] = useState([]);
    const columns = [
        {dataField: 'id', text:'Id',sort: true,filter: textFilter()},
        {dataField: 'title', text:'Title', sort: true, filter: textFilter()},
        {dataField: 'completed', text:'Completed', filter: textFilter()}
    ]
    const pagination = paginationFactory({
        page:1,
        sizePerPage:5,
        lastPageText:'>>',
        firstPageText:'<<',
        nextPageText:'>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function(page,sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage)
        },
        onSizePerPageChange: function (page, sizePerPage){
            console.log('page',page)
            console.log('sizePerPage', sizePerPage)
        }
    })
    const getTasks = async () => {
        const res = await fetch(`${API}/api/tasks/`);
        const data = await res.json();
        data.map(compl =>{
            if(compl.completed === false){
                compl.completed = 'No'
            }
            else{
                compl.completed = 'Yes'
            }
        })
        setTasks(data);
      };
    
      useEffect(() => {
        getTasks();
      }, []);

    return(
        <BootstrapTable 
        bootstrap4 
        keyField='id' 
        columns={columns} 
        data={tasks}
        pagination={pagination}
        filter={filterFactory()}
        filterPosition="top"
        />
    )
    
    }