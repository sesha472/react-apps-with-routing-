import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navstyle={
        display:"flex",
        flexWrap:'warp',
        justifyContent:"space-around",
        listStyleType:"none",
        backgroundColor:"lightgreen",
        padding:"9px 1px",
        marginBottom:"100px",
        boxShadow:"2px 4px 6px black",
        borderRadius:"5px",


    }
    return (
        <div style={{ position:"sticky",top:"20px"}}>
            <ul style={navstyle} >
                <Link className="btn btn-outline-primary" to='/Loginform'>Loginform</Link>
                <Link className="btn btn-outline-danger" to='/Calculator'>Calculator</Link>
                <Link className="btn btn-outline-success" to='/formsubmit'>formsubmit</Link>
                <Link className="btn btn-outline-info" to='/singledata'>singledata</Link>

            </ul>
            
        </div>
    )
}

export default Navbar
