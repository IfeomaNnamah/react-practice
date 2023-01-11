import React from 'react'

const person = {
    name: "Ifeoma",
    age: "30",
    role: "Staff"
}

class Person extends React.Component {
    render() {
        return (
            <div>
                <h5>Using Class Components</h5>
                <p>Name: {person.name}</p>
                <p>Role: {person.role}</p>
            </div>
        )
    }
}

export default Person