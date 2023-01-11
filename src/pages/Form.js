import React from "react";

class Form extends React.Component {
    initialState = {
        name: '',
        job: ''
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value //set state keys to the value entered in form
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)//submit form
        this.setState(this.initialState)//clear state information
    }

    render() {
        const {name, job} = this.state        
        const formStyle = {
            width: "50%",
            margin: "10px"
        }
        return (
            <form style={formStyle}>
                <h4>Form</h4>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form