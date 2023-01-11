import React from "react"

const ProductDetail = (props) => {
    const {item} = props
    return (
        <div>
            {/* <img src={item.images[0]} alt={item.title} width="80px" /> */}
            <h5>{item.title}</h5>
            <p>₦ {item.price}.00</p>
            <hr />
        </div>
    )
}

class Api extends React.Component {
    state = {
        data: [],
        search: "",
        singleProduct: []
    }

    componentDidMount() {
        const url = 'https://dummyjson.com/products'

        fetch(url)
            .then((response) => response.json() )
            .then((response) => {
                this.setState({
                    data: response.products // set data to products lists
                })                
            })
    }

    searchProduct = (value) => {
        const url = 'https://dummyjson.com/products/search?q=' + value

        fetch(url)
            .then((response) => response.json() )
            .then((response) => {
                this.setState({
                    data: response.products // set data to products lists
                })                
            })
    }

    getProductById = (id) => {
        const url = 'https://dummyjson.com/products/' + id

        fetch(url)
            .then((response) => response.json() )
            .then((response) => {
                this.setState({
                    singleProduct: response // set singleProduct to response
                })               
            })            
    }

    handleSearch = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })

        this.searchProduct(value)
    }

    render() {
        const {data, search} = this.state

        // table records
        const row = data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>
                        <img src={row.images[0]} alt={row.title} width="80px" />
                    </td>
                    <td>{row.title}</td>
                    <td>{row.category}</td>
                    <td>₦ {row.price}.00</td>
                    <td><button onClick={() => this.getProductById(row.id)}>View</button></td>
                </tr>
            )            
        })

        const inputStyle = {
            width: "400px",
            marginRight: "10px",
        }

        const divStyle = {display: "flex", justifyContent: "space-between"}

        return (
            <>  
                {this.state.singleProduct.length !== 0 && <ProductDetail item={this.state.singleProduct} /> }

                <div style={divStyle}>
                    <h4>Products</h4>
                    <input name="search" value={search} 
                        onChange={this.handleSearch} 
                        type="text" 
                        placeholder="Search Products" 
                        style={inputStyle} />
                    {/* <button onClick={() => this.searchProduct(search)}>Search</button> */}
                </div>         
                
                <table>
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{data.length !== 0 ? row : <tr style={{fontSize: "24px", margin: "12px 0"}}>Loading...</tr>}</tbody>
                </table>                
            </>            
        )      
    }
}

export default Api