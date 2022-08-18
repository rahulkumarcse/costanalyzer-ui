import React from 'react'
// import BootstrapTable from "react-bootstrap-table-next";
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import paginationFactory from 'react-bootstrap-table2-paginator';

function AddSpend() {
   
    const products = [
        {
            date: "01/01/2022",
            name: "Rishabh",
            clientName: "ABCD",
            action: "Button"
        }
    ]
    const quantity = document.getElementById('amount')
    return (
        <div>
            <table className='table-success'>
                <thead>
                    <tr>
                        <th>S.No  </th>
                        <th> Date</th>
                        <th> Amount  </th>
                        <th> Name  </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><input type='date' name="datevalue" id="datevalue"/></td>
                        <td><input type='number' id='amount' name='amount'/></td>
                        <td>data</td>
                    </tr>
                </tbody>
            </table>
           
              
            {  console.log(quantity)}
    
        </div>
        // <div className='container my-2'>
        //     <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } pagination={ paginationFactory() } />
        // </div>
    )
}

export default AddSpend
