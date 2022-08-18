import React from 'react'
// import BootstrapTable from "react-bootstrap-table-next";
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import paginationFactory from 'react-bootstrap-table2-paginator';

const ShowSpend = () => {
    const columns = [
        {
            dataField: "spendingdate",
            text: "Spending Date",
            
          },
        {
          dataField: "spendamount",
          text: "Spending Amount",
        },
     
          {
            dataField: "duration",
            text: "Duration",
          }
       
      ];
      const products=[
        {
            date: "01/01/2022",
            name: "Rishabh",
            clientName: "ABCD",
            workType: "Audit",
            status:"Approval Pending",
            approvedBy:"Rishabh",
            duration:"05:30",
            remark:"sfirigtigtigghihitjgitjgitjgitj",
            action:"Button"
          },{
            date: "01/01/2022",
            name: "Rishabh",
            clientName: "ABCD",
            workType: "Audit",
            status:"Approved",
            approvedBy:"Rishabh",
            duration:"05:30",
            remark:"sfirigtigtigghihitjgitjgitjgitj",
            action:"Button"
          }
      ]
  return (
    <div>
      {/* <div className='container my-2'>
            <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } pagination={ paginationFactory() } />
        </div> */}
    </div>
  )
}

export default ShowSpend
