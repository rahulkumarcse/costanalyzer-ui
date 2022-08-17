import React from 'react'

function AddSpend() {
    return (
        <div className='container my-2'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Spending Date</th>
                        <th scope="col">Spend Amount</th>
                        <th scope="col">Spend Type</th>
                        <th scope="col">Spend Name</th>
                        <th scope="col">Spend Category</th>
                        <th scope="col">Miscellaneous</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><input type="date" className="form-control" id="spenddate" aria-describedby="emailHelp" /></td>
                        <td><input type="number" className="form-control" id="spendamount" aria-describedby="emailHelp" /></td>
                        <td>
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Choose Spend Type</option>
                                <option value="1">Essential</option>
                                <option value="2">Non-Essential</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></td>
                        <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Spend Category</option>
                            <option value="1">Food</option>
                            <option value="2">Grocery</option>
                            <option value="3">Water Can</option>
                            <option value="2">Electricity Bill</option>
                            <option value="2">Room Rent</option>
                            <option value="2">Broadband</option>
                            <option value="2">To Friend/Family</option>
                            <option value="2">Custom</option>

                        </select></td>
                        <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Miscellaneous type</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select></td>
                    </tr>

                </tbody>

                
            </table>
            <button type="submit" className="btn btn-primary my-2" >Submit</button>
        </div>
    )
}

export default AddSpend
