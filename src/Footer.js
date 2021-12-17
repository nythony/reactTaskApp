import React, { useState } from "react"

function Footer() {
    
    return (
        <div className="footer">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="nav-brand text-white" href="./">
                        imgFooter
                    </a>
                    <div className="text-white">
                        {(new Date().getFullYear())} - Alina Chaiyasarikul
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Footer