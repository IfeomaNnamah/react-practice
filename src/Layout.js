import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const listStyle = {
        margin: "18px 24px",
        textDecoration: "none",
        fontSize: "16px"
    }
  return (
    <>
      <nav style={{backgroundColor: "whitesmoke"}}>
        <ul style={{
            listStyle: "none",
            display: "flex"
        }}>
          <li style={listStyle}>
            <Link to="/">Person</Link>
          </li>
          <li style={listStyle}>
            <Link to="/student">Student</Link>
          </li>
          <li style={listStyle}>
            <Link to="/employee">Employee</Link>
          </li>
          <li style={listStyle}>
            <Link to="/api">Api</Link>
          </li>
          <li style={listStyle}>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;