import React, {useState} from "react";
// const student = {
//     name: "Olive"
// }

const Student = (props) => {
    // const {name, grade} = props
    const [inputs, setInputs] = useState({}) // get multiple form inputs into an object
    const [country, setCountry] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();        
        console.log(inputs)
    }

    const handleInputs = (e) => {
        const {name, value} = e.target // retrieve name and value of each input

        setInputs(values => ({...values, [name]: value})) //set the retrieved values to the inputs object
    }

    return ( 
        <div style={{margin: "24px 48px"}}> 
        <h5>Used useState()</h5>
            <form onSubmit={handleSubmit} >
                <label>Role</label>
                <input type="text" name="role" value={inputs.role} placeholder="Enter Role" 
                    onChange={handleInputs} />
                <label>User ID</label>
                <input type="text" name="userid" value={inputs.userid} placeholder="Enter User ID" 
                    onChange={handleInputs} />

                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                </select>

                <p>Selected: {country}</p>

                <input type="submit" />            
            </form>   
            <p>Role: {inputs.role}</p>
            <p>User ID: {inputs.userid}</p>
        </div>
        // <div>
        //     <h5>Using Function Components</h5>
        //     <p>Student Name: {student.name}</p>
        //     <hr />
        //     <p>Name: {name}</p>
        //     <p>Grade: {grade}</p>
        // </div>
    )
}

export default Student