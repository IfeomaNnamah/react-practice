import React from "react";
const student = {
    name: "Olive"
}

const Student = (props) => {
    const {name, grade} = props

    return (     
        <div>
            <h5>Using Function Components</h5>
            <p>Student Name: {student.name}</p>
            <hr />
            <p>Name: {name}</p>
            <p>Grade: {grade}</p>
        </div>
    )
}

export default Student