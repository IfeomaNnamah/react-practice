import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Person from './pages/Person'
import Student from './pages/Student'
import Table from './pages/Table'
import Form from './pages/Form'
import Api from './pages/Api'
import Todo from './pages/Todo'

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

        // const name = "Ifeoma"
        // const grade = "A" 

        const container = {
            display: "flex",
            justifyContent: "between",
            marginTop: "10px"
        }         
        
    
        // return (
        //     <div>                
        //         {/* {
        //             names.map((name, index) => {
        //                 return (
        //                     <>
        //                         <p><span>{index + 1}. </span>{name}</p>
        //                         <button onClick={() => this.deleteName(index)}>Delete</button><hr/>
        //                     </>                            
        //                 )
        //             })
        //         } */}
        //     </div>      
        // )

        return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Person />} />
                  <Route path="student" element={<Student />} />
                  <Route path="employee" element={
                    <div style={container}>
                        <Table tableData={data} removeRow={this.removeRow} />
                        <Form handleSubmit={this.handleSubmit} />
                    </div>
                  } />
                  <Route path="api" element={<Api />} />
                  <Route path="todo" element={<Todo />} />
                  {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
              </Routes>
            </BrowserRouter>
          );
    }
}

export default App

