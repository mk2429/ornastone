import React from 'react'
// import logo from "../logo.png"
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className='fixed-top px-3 py-3' style={{ background: "#14493f" }}>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <h6 className='display' style={{ color: "#DED3A4" }}>ORNA & STONES</h6>

                </div>
                <div>
                    <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0">
                        <li className="nav-item  d-flex justify-content-center align-items-center">
                            <a className=" active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page" onClick={() => navigate("/a")} target='_blank'><ShoppingCartIcon style={{ color: "#DED3A4", cursor: "pointer" }} /></a>
                        </li>
                        <li className="nav-item  d-flex justify-content-center align-items-center">
                            <div className="active d-flex justify-content-center align-items-center navlink mx-2" aria-current="page" onClick={() => navigate("/a")} ><PersonIcon style={{ color: "#DED3A4", cursor: "pointer" }} /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

