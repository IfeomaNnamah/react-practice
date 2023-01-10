import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

function TableBody(props) {
    const row = props.tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeRow(index)}>Remove</button>
                </td>
            </tr>   
        )
    })
    return (
        <tbody>{row}</tbody>
    )        
}

class Table extends React.Component {
    render() {    
        // const data = this.props.tableData    
        const {tableData, removeRow} = this.props    // similar to above using deconstruction 
        return (
            <>
                <h5>Using Props and Map</h5>
                <table>
                    <TableHeader />
                    <TableBody tableData={tableData} removeRow={removeRow} />
                </table>
            </>            
        )
    }
}

export default Table