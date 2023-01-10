import React, { Component } from 'react';
import Person from './Person'
import Student from './Student'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        data: [
            {
            name: 'Alice',
            job: 'Janitor',
            },
            {
            name: 'Mac',
            job: 'Bouncer',
            },
            {
            name: 'Dee',
            job: 'Aspring actress',
            },
            {
            name: 'Dennis',
            job: 'Bartender',
            },
        ],
        names: [
            "Ifeoma",
            "Olive",
            "Emeka"
        ]
    }

    removeRow = (selected) => {
        const {data} = this.state

        this.setState({
            data: data.filter((row, index) => {
                return index !== selected //return a new array where the selected value isn't included.
            })
        })
    }

    handleSubmit = (formData) => {
        this.setState({
            data: [...this.state.data, formData]
        })
    }

    // deleteName(index){
    //     const {names} = this.state

    //     this.setState({
    //         names: names.filter((row, i) => {
    //             return i !== index
    //         })
    //     })
    // }

    render() {
        const {data} = this.state
        
        // const names = [
        //     "Ifeoma", "Olive", "Nnamah", "John"
        // ]

        const name = "Ifeoma"
        const grade = "A"        
    
        return (
            <div>
                <Person />
                <Student name={name} grade={grade} />
                <div>
                    <Table tableData={data} removeRow={this.removeRow} />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
                
                {/* {
                    names.map((name, index) => {
                        return (
                            <>
                                <p><span>{index + 1}. </span>{name}</p>
                                <button onClick={() => this.deleteName(index)}>Delete</button><hr/>
                            </>                            
                        )
                    })
                } */}
            </div>      
        )
    }
}

export default App

